const { Router } = require('express');
const {Dog,Temperaments} = require('../db')
const {Op} = require('sequelize')
const axios = require('axios');
// const { Sequelize } = require('sequelize/dist');
const routerD= Router();

routerD.get('/',  (req,res,next)=>{
    try {
        let name = req.query.name
    let dogPromiseAPI
    let dogPromiseDB
        if (name) {
            dogPromiseAPI = axios.get('https://api.thedogapi.com/v1/breeds/search?q='+name)  // con axios no necesito otra promesa ni convertir a JSON
            dogPromiseDB = Dog.findAll({
                   include: Temperaments,
                   name : {
                       [Op.iLike]: "%"+ name +"%"
                   },
                   order: [
                       ['name','ASC']
                   ]
               })
        } else {
            dogPromiseAPI = axios.get('https://api.thedogapi.com/v1/breeds')  // con axios no necesito otra promesa ni convertir a JSON
            dogPromiseDB = Dog.findAll({
                   include: Temperaments
               })
        }
     Promise.all([dogPromiseAPI,dogPromiseDB])
     .then((respuesta)=>{
         const [dogAPI, dogDB] = respuesta
         let result = {dogAPI}
        let filterDogAPI = result.dogAPI.data.map((data)=>{
            return {
                 id: data.id,
                name: data.name,
                height:data.height,
                weight:data.weight,
                life_span:data.life_span,
                name_temperament:data.temperament,
                image:data.image
             }
        })  
        let allDogs = [...filterDogAPI,...dogDB]
        // console.log(allDogs)
        res.send(allDogs)
     })
    } catch (error) {
        next(error)
    }
})


// routerD.get('/', async (req,res,next)=>{
//     try {
//         const dog = await Dog.findAll({
//             include: Temperaments
//         })
//         res.send(dog)
//     } catch (error) {
//         next(error)
//     }
// })

routerD.post('/', async (req,res,next)=>{
    try {
        const {name, height, weight, life_span} = req.body;
        const newDog = await Dog.create({
        name, height, weight, life_span
    })
    res.status(201).send(newDog)
    } catch (error) {
        next(error)
    }
})

routerD.post('/:dogId/temperament/:temperamentId', async (req,res,next)=>{
    try {
        const {dogId, temperamentId} = req.params;
        console.log(dogId, temperamentId)
        const dog = await Dog.findByPk(dogId)
        console.log(dog.JSON)
        await dog.addTemperaments(temperamentId)
        res.send(200)
    } catch (error) {
        next(error)
    }
})

routerD.put('/', (req,res,next)=>{
    res.send('soy put /Dogs')
})

routerD.delete('/', (req,res,next)=>{
    res.send('soy delete /Dogs')
})

// [ ] GET /dogs/{idRaza}:
// Obtener el detalle de una raza de perro en particular
// Debe traer solo los datos pedidos en la ruta de detalle de raza de perro
// Incluir los temperamentos asociados
// [ ] GET /temperament:
// Obtener todos los temperamentos posibles
// En una primera instancia deberán obtenerlos desde la API externa y guardarlos en su propia base de datos y luego ya utilizarlos desde allí


module.exports = routerD;