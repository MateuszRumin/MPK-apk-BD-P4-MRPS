module.exports = (sequelize,DataTypes) => {

    const Changes = sequelize.define("Changes",{
        id_change:{
            type:DataTypes.INTEGER,
            allowNull:false,
            primaryKey:true,
            autoIncrement:true
        },   
        date_from:{
            type:DataTypes.DATE,
            allowNull:false
        },
        date_to:{
            type:DataTypes.DATE,
            allowNull:false
        },
        id_line:{
            type:DataTypes.DATE,
            allowNull:false
        }
                   
        
    })

 
    

    
    return Changes
    
}