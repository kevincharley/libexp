var express=require('express')
const routs=express.Router();
module.exports=routs;
var books=[
    {
        btitle:"born acrime",
        bgenre:"politics",
        bauthor:"trevor nova",
        img:"https://images-na.ssl-images-amazon.com/images/I/91mePFAgywL.jpg"
    
    },
    { btitle:"bofggrn acrime",
    bgenre:"politics",
    bauthor:"trevor nova",
    img:"https://images-na.ssl-images-amazon.com/images/I/91mePFAgywL.jpg"
    },
    { btitle:"borsggn acrime",
    bgenre:"politics",
    bauthor:"trevor nova",
    img:"https://images-na.ssl-images-amazon.com/images/I/91mePFAgywL.jpg"
    }
    ]
routs.get("/",function(req,res){
    res.render('books',{pageTitle:"BOOKS" ,nav:[{link:"/book",title:"Book"},{link:"/author",title:"Authors"}],arraybook:books});
})
routs.get("/:id",function(req,res){
    var id=req.params.id
    console.log(id)
 
 res.render("eachbook",{pageTitle:"BOOK" ,nav:[{link:"/book",title:"Book"},{link:"/author",title:"Authors"}],arraybook:books[id]})
})
