const express=require('express');
const app=express();
const path=require('path');
const port=80;

// for serving static file
app.use('/static',express.static('static'));

// set the template engine as pug
app.set('view engine', 'pug');

// set the views directory
app.set('views',path.join(__dirname,'views'))

// our pug demo endpoint
app.get("/demo",(req,res)=>{
res.status(200).render('demo',{ title:' lav', message:'hello there and thanx for helping me for pug usage'})
});

app.get("/",(req,res)=>{
res.send("this is my Home page of first express website");
});

app.get("/about",(req,res)=>{
res.status(200).send("this is my About page of first express website");
});

app.get("/this",(req,res)=>{
res.status(404).send("<h1>404 page not found</h1>");
});

app.post("/about",(req,res)=>{
res.send("this is post request of About page of first express website");
});

app.listen(port,()=>{
    console.log(`the application is started at port ${port}`);
});