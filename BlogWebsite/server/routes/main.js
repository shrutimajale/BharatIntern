const express=require('express');
const router=express.Router();
const Post=require('../models/Post');

//routes
router.get('',async(req,resp)=>{

    const locals={
        title:"NodeJs Blog",
        description:"Simple Blog created with NodeJs,Express & MongoDb"
    }
    // let slug=req.params.id;
    try{
const data=await Post.find();
    
        // const data=await Post.findById({_id:slug});
        resp.render('index',{ locals, data});
    }catch(error){
        console.log(error);

    }
   // resp.render('index',{locals});
});

router.get('/post/:id',async(req,resp)=>{
    try{
    const locals={
        title:"NodeJs Blog",
        description:"Simple Blog created with NodeJs,Express & MongoDb"
    }
    let slug=req.params.id;
   
const data=await Post.findById({_id:slug});
    
        // const data=await Post.findById({_id:slug});
        resp.render('post',{ locals, data});
    }catch(error){
        console.log(error);

    }
   // resp.render('index',{locals});
});



router.get('/about',(req,resp)=>{
    resp.render('about');
});


module.exports=router;



// function insertPostData(){
//     Post.insertMany([
//         {
//             title:"Building a blog",
//             body:"this is the body text"
//         },
//         {
//             title:"Building a blog2",
//             body:"this is the body text"
//         }
//     ])
// }
// insertPostData();