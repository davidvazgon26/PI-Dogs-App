const { Router } = require('express');
const {Temperaments} = require('../db')
const routerT= Router();

routerT.get('/',  async (req,res,next)=>{
    try {
        const temp = await Temperaments.findAll()
        res.send(temp)
    } catch (error) {
        next(error)
    }
})

routerT.post('/', async (req,res,next)=>{
    try {
        const {name} = req.body;
    const newTemp = await Temperaments.create({
        name})
        res.status(201).send(newTemp)
    } catch (error) {
        next(error)
    }
})

routerT.put('/', (req,res,next)=>{
    res.send('soy put /Temperamento')
})

routerT.delete('/', (req,res,next)=>{
    res.send('soy delete /Temperamento')
})


module.exports = routerT;