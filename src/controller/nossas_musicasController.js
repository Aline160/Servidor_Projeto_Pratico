const nossas_musicas = require ("../model/nossas_musicas.json");

const getAll = (req,res) => {
    console.log(req.url);
    res.status(200).send(nossas_musicas);
}

const getByID = (req,res) => {
    const id = req.params.id

    const musicaFiltrada= nossas_musicas.find ((nossas_musicas) => nossas_musicas.id == id)

    res.status(200).send(musicaFiltrada)
}


const getbyArtist = (req,res) => {
    const artista = req.params.artista
    const artistaFiltrado= nossas_musicas.filter ((nossas_musicas) => nossas_musicas.artista == artista)

    res.status(200).send(artistaFiltrado);
}

const getAllArtists = (req,res) =>{
    const artistas = nossas_musicas.map((nossas_musicas) => nossas_musicas.artista)

    res.status(200).send(artistas)
}

module.exports = {getAll,getByID,getbyArtist,getAllArtists}