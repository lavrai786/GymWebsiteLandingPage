const express=require('express');
const app=express();
const path=require('path');
const port=80;
const fs=require('fs');


// EXPRESS STUFF
app.use('/static',express.static('static'));// for serving static file included css
app.use(express.urlencoded())//middleware used to carry the form data to express

// PUG SPECIFIC STUFF
app.set('view engine', 'pug');// set the template engine as pug
app.set('views',path.join(__dirname,'views'))// set the views directory

// ENDPOINTS
app.get('/',(req,res)=>{
    const con= "this is best contact on internet,so dont play wit it....."
    const params={"title":"lav","content":con}
    res.status(200).render('index',params);
})

app.post('/',(req,res)=>{
    // console.log(req.body);
    name=req.body.name
    email=req.body.email
    number=req.body.number
    address=req.body.address
    about=req.body.about

    let outputTowrite=`The name of the person is ${name} and email is ${email},number is ${number},address is ${address} and more about the perso is ${about}`
    fs.writeFileSync('output.txt',outputTowrite)
    const params={"message":"You have been submitted Sucessfully...."}
    res.status(200).render('index',params);
})



// START THE SERVER
app.listen(port,()=>{
    console.log(`app is started at port number ${port}`);
})