const express=require("express")
const app=express()
const path=require("path")
const hbs=require("hbs")
const collection=require("./mongodb")
const {engine}=require("express-handlebars")

app.engine(".hbs",engine({
extname:".hbs",
defaultLayout:false,
layoutsDir:"views"
}))


const templatePath=path.join(__dirname,'../templates')
const publicpath=path.join(__dirname,'../public')

console.log(publicpath)
app.use(express.json())
app.set("view engine",'hbs')
app.set("views",templatePath)
app.use(express.urlencoded({extended:false}));
app.use(express.static(publicpath))



app.get("/",(req,resp)=>{
    resp.render("login")
})

app.get("/signup",(req,resp)=>{
    resp.render("signup")
})

app.post("/signup",async (req,resp)=>{

const data={
    name:req.body.name,
    password:req.body.password
}
await collection.insertMany([data])

resp.render("home")
})

app.post("/login",async (req,resp)=>{
try{
    const check=await collection.findOne({name:req.body.name})

    if(check.password===req.body.password){
        resp.render("home")
    }
    else{
        resp.send("wrong password")
    }

   }
catch{
        resp.send("wrong details entered")
   }
   
})


app.listen(3000,()=>{
    console.log("Port Connected");
})