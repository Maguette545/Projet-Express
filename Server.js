const express = require('express');
const path = require('path');
const app = express();
const port = 5050;

 //route pour le html
app.use(express.static(path.join(__dirname, 'views')));
//route pour le css statique
app.use(express.static(path.join(__dirname, 'public')));
const now = new Date();
const days = now.getDay();
const time = now.getHours();

const isDays = days >= 1 && days <= 5;
const isTime = time >= 9 && time <= 17;

//le middleware
const midd = (req, res, next) => {
if (isDays && isTime) {
   next();
} else {
   res.sendFile(path.join(__dirname, "views", "Closed.html"));
}
}
//route pour la page principale
app.get('/', midd, (req,res) => {
   res.sendFile(path.join(__dirname, "views", "Accueil.html"))
})
//route pour la page Contact
app.get('/Contact', midd, (req,res) => {
   res.sendFile(path.join(__dirname, "views", "Contact.html"))
})
//route pour la page Service
app.get('/Service', midd, (req,res) => {
   res.sendFile(path.join(__dirname, "views", "Service.html"))
})
//Lancement du server
 app.listen(port , () => {
    console.log("Server is running on port :" , port);
    
 })
 