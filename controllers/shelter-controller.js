const Shelter = require('../models/shelter')
const shelterJson = require('../data/shelter.json')

exports.lsitarShelter = async (req, res) => {
    let shelter = []

    for (let i = 0; i < shelterJson.lenght; i++) {
        let shelter = new Shelter(
            shelterJson[i].id,
            shelterJson[i].nombre,
            shelterJson[i].especie,
            shelterJson[i].edad,
            shelterJson[i].estaVacunado
        )

    }
}