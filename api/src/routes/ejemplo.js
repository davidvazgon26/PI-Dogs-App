const { Router } = require('express');
const router = Router();

router.get('/', (req,res,next)=>{
    res.send('soy get /ejemplo')
})

router.post('/', (req,res,next)=>{
    res.send('soy post /ejemplo')
})

router.put('/', (req,res,next)=>{
    res.send('soy put /ejemplo')
})

router.delete('/', (req,res,next)=>{
    res.send('soy delete /ejemplo')
})


module.exports = router;