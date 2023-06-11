const { Lines,Stops,Routes } = require('../../../models')
const sequelize = require('sequelize');

exports.all = async (req, res) => {

    try{
    const lines = await Lines.findAll({ 
        attributes:['id_line','num_line']})
        

	res.json(lines)

    }
    catch (err) {

        console.error(err);
        res.status(500).json('Wystąpił błąd serwera');
    }
}


exports.allMain = async (req, res) => {

    try{
    const lines = await Lines.findAll({ 
        attributes:['id_line','num_line'],
        where:{
            $existsts:sequelize.literal('SELECT 1 FROM ')
        }
    
    
    
    
    
    })
        
        
        

	res.json(lines)

    }
    catch (err) {

        console.error(err);
        res.status(500).json('Wystąpił błąd serwera');
    }
}