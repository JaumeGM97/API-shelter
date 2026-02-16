const Shelter = require('../models/shelter')
const shelterJson = require('../data/shelter.json')

exports.lsitarShelter = async (req, res) => {
    let shelters = []

    for (let i = 0; i < shelterJson.length; i++) {
        let shelter = new Shelter(
            shelterJson[i].id,
            shelterJson[i].nombre,
            shelterJson[i].especie,
            shelterJson[i].edad,
            shelterJson[i].estaVacunado
        )
        shelters.push(shelter)

    }
    return res.json(shelters)
}


exports.listarPerId = async (req, res) => {
    const shelterId = req.params.id

    for (let i = 0; i < shelterJson.length; i++) {
        let shelter = new Shelter(
            shelterJson[i].id,
            shelterJson[i].nombre,
            shelterJson[i].especie,
            shelterJson[i].edad,
            shelterJson[i].estaVacunado
        )
        if(shelter.id == shelterId){
            return res.json(shelter)
        }
    }
    return res.status(404).json({ error: "Shelter not found" })
}


exports.lsitarEspecies = async (req, res) => {
    let shelters = []

    let filtroSpecie = req.query.especie

    for (let i = 0; i < shelterJson.length; i++) {
        let shelter = new Shelter(
            shelterJson[i].id,
            shelterJson[i].nombre,
            shelterJson[i].especie,
            shelterJson[i].edad,
            shelterJson[i].estaVacunado
        )
        if(filtroSpecie !== undefined){
            if(shelter.especie === filtroSpecie){
                shelters.push(shelter)
            }
        } else{
            shelters.push(shelter)
        }

    }
    return res.json(shelters)
}