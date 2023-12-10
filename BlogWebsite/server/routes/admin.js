const express=require('express');
const router=express.Router();
const Post=require('../models/Post');
const User=require('../models/User');


const adminLayout='../views/layouts/admin';
//routes
router.get('/admin',async(req,resp)=>{
    try{
    const locals={
        title:"NodeJs Blog",
        description:"Simple Blog created with NodeJs,Express & MongoDb"
    }
     
        resp.render('admin/index',{ locals,layout:adminLayout});
    }catch(error){
        console.log(error);

    }
   // resp.render('index',{locals});
});


//post
//check login
router.post('/admin',async(req,resp)=>{
    try{
    const { username,password } = req.body;
    console.log(req.body);
     
        resp.redirect('/admin');
    }catch(error){
        console.log(error);

    }
   // resp.render('index',{locals});
});






module.exports=router;