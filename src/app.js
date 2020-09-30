const express = require ('express');
const app = express();

const nossas_musicas = require ('./routes/nossas_musicasRoutes');

app.use('/',nossas_musicas);

app.get('*', (req,res) =>{
    res.status(404).sendFile ("./views/404.html",{root: __dirname})
})

module.exports = app