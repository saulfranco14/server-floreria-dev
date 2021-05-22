const User                  = require('../models/User');
const { validationResult }  = require('express-validator');

/*
    01 Ya existe el email
*/
exports.createUser = async ( req, response ) => {

    const errors                = validationResult( req );
    if( !errors.isEmpty() )return response.status( 400 ).json( { errors: errors.array() } )
    
    const { email }   = req.body;

    try {
        let user = await User.findOne( { email } );
        
        // Buscamos usuario
        if(user) return response.status(400).json( { msg: 'Hay un error al crear tu usuario, intente más tarde.(01)'} );
        
        // creación del nuevo usuario
        user = new User( req.body );

        // guardar usuario
        await user.save();

        // Exitoso
        response.status(200).json( { msg: 'Se ha creado el usuario exitosamente', status: 1 } );

    } catch (error) {
        console.log(error);
        response.status(400).json( { msg: 'Hubo un error al crear el usuario', status: -1 } );
    }
}