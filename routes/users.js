const express           = require('express');
const router            = express.Router();
const userController    = require('../controllers/userController');
const { check }         = require('express-validator');

/*
    JSON para creación del usuario
    method : POST
    http://localhost:4000/api/users
    {
        "nombre"    : "Saúl Mauricio Franco Rentería",
        "email"     : "saul.franco1420@gmail.com",
        "telefono_cel"  : "mateo142'"
    }

*/
router.post('/create', 
    [
        check('nombre_completo', 'El nombre es obligatorio').not().isEmpty(),
        check('email', 'Ingresa un email válido').isEmail(),
        check('telefono_cel','Télefono celular es obligatorio').not().isEmpty(),
    ],
    userController.createUser
);

module.exports = router;