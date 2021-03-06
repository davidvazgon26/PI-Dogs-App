const { Router } = require('express');
const routerH = require('./home')
const routerD = require('./dog')
const routerT = require('./temp')
const eje = require('./ejemplo')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/', routerD);
router.use('/dogs', routerD);
router.use('/temperament', routerT);
router.use('/ejemplos', eje);

module.exports = router;
