const express = require ('express')
const expressHandlebars = require('express-handlebars')
const cookieParser = require('cookie-parser')
const session = require ('express-session')
const port = process.env.PORT|| 3000
const app = express()
app.use(session({ secret: 'angcms', saveUninitialized: true, resave: true }))
app.use(express.static(__dirname + '/public'))



app.engine('handlebars', expressHandlebars.engine({defaultLayout:'main'}))
app.set('view engine', 'handlebars')
app.use(cookieParser())

 
app.get('/holidays',(req,res)=>{
    res.render('holidays',{
    
        tet: req.cookies.tet,
        chirstmate: req.session.chirstmate
    })
})
app.get('/tet',(req,res)=>{
    res.render('tet',{
    
        tet: req.cookies.tet,
        chirstmate: req.session.chirstmate
    })
})
app.get('/chirstmate',(req,res)=>{
    res.render('chirstmate',{
    
        tet: req.cookies.tet,
        chirstmate: req.session.chirstmate
    })
})
app.get('/set-random-tet',(req,res)=>{
    res.cookie('tet',(Math.random()*10000).toFixed(0))
    res.redirect('/holidays')
})

app.get('/set-random-chirstmate',(req,res)=>{
    req.session.username= catNames,random()
    res.redirect('/holidays')
    
})

app.listen(port,() =>console.log(`navigate to http://localhost:${port}`))

