module.exports = (sequelize,DataTypes) => {

    const Stops = sequelize.define("Stops",{
        id_stop:{
            type:DataTypes.INTEGER,
            allowNull:false,
            primaryKey:true,
            autoIncrement:true
        },
        name:{
            type:DataTypes.STRING,
            allowNull:false
        },
        id_street:{
            type:DataTypes.INTEGER,
            allowNull:false
        }
    })

    return Stops
    
}