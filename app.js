var express=require('express')
var app=express();
var routs=require('./routs/bookrouter')
var ar=require('./routs/authorrouter')
const path=require('path')
app.use("/book",routs)
app.use(express.static(path.join(__dirname,"/public")));
app.set('views','./src/views');
app.set('view engine','ejs')
app.listen(3000,function(req,res){
    console.log("server lib init")
});
app.get("/",function(req,res){
   // res.sendFile(__dirname+"/src/views/index.html")
   //res.render('index')
   res.render('index',{pageTitle:"Library" ,nav:[{link:"/book",title:"Book"},{link:"/author",title:"Authors"}]});
});



