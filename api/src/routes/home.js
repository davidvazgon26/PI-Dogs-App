const { Router } = require('express');
const routerH = Router();

routerH.get('/', (req,res,next)=>{
    res.send('soy get /home')
})

routerH.post('/', (req,res,next)=>{
    res.send('soy post /home')
})

routerH.put('/', (req,res,next)=>{
    res.send('soy put /home')
})

routerH.delete('/', (req,res,next)=>{
    res.send('soy delete /home')
})


module.exports = routerH;