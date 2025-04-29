const express = require('express');
const path = require('path');
const app = express();
const port = 5050;
 
app.use(express.static(path.join(__dirname, 'public')));

const now = new Date();
const days = now.getDay();
const time = now.getHours();

const isDays = days >= 1 && days <= 5;
const isTime = time >= 9 && time <= 17;

const midd = (req, res, next) => {
if (isDays && isTime) {
   next();
} else {
   res.sendFile(path.join(__dirname, "views", "Closed.html"));
}
}
app.get('/' , midd, (req,res) => {
   res.sendFile(path.join(__dirname, "views", "Accueil.html"))
})
app.get('/' , midd, (req,res) => {
   res.sendFile(path.join(__dirname, "views", "Contact.html"))
})
app.get('/' , midd, (req,res) => {
   res.sendFile(path.join(__dirname, "views", "Service.html"))
})

 app.listen(port , () => {
    console.log("Server is running on port :" , port);
    
 })
 