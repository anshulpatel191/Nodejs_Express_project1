const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');

const port = 3000 || process.env.PORT;
const staticpath= path.join(__dirname,'../public');

const templatepath = path.join(__dirname,'../templates/views');
const partialpath = path.join(__dirname,'../templates/partials');

app.set('view engine','hbs');
app.set('views',templatepath);
app.use(express.static(staticpath));
hbs.registerPartials(partialpath)

app.get('',(req,res)=>{
    res.render('index');
});

app.get('/about',(req,res)=>{
    res.render('about');
});

// app.get('/weather',(req,res)=>{
//     res.render('weather');
// });

app.get('*',(req,res)=>{
    res.render('404error',{
        errmsg:'OOPS not Found!!!'
    });
});

app.listen(port,()=>{
    console.log(`Listening to the port ${port}`);
});