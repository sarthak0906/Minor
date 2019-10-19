const path=require('path')
const hbs=require('hbs')
const express=require('express')

const app=express()
const port=process.env.PORT || 3000

const publicDirect=path.join(__dirname,"../public")
const viewsPath=path.join(__dirname,'../templates/views')

app.set('view engine','hbs') 
app.set('views',viewsPath)   

app.use(express.static(publicDirect))   


app.get('',(req,res)=>{                 
    res.render('index',{
        title: 'About',
        name: "Jitin Lamba"                   
    })
})


app.listen(port, ()=>{
    console.log("Server Started on port "+port);
    
}) 