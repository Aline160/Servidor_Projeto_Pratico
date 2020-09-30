const express = require ('express');
const route = express.Router();
const controller = require ('../controller/nossas_musicasController');

route.get ('/',controller.getAll);
route.get ('/:id',controller.getByID);
route.get ('/artista/:artista',controller.getbyArtist);
route.get ('/artistas',controller.getAllArtists);


module.exports = route