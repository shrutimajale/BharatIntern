const mongoose=require("mongoose")

mongoose.connect("mongodb://127.0.0.1/try")
.then(()=>{
    console.log("mongodb connected");
})

.catch(()=>{
    console.log("failed to connect mongodb");
})

const LogInSchema=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    }
})

const collection=new mongoose.model("Collection1",LogInSchema)

module.exports=collection