module.exports = (sequelize,DataTypes) => {

    const Stops = sequelize.define("Stops",{
        stop_id:{
            type:DataTypes.INTEGER,
            allowNull:false,
            primaryKey:true,
            autoIncrement:true
        },
        name:{
            type:DataTypes.STRING,
            allowNull:false
        },
        street_id:{
            type:DataTypes.INTEGER,
            allowNull:false
        }
    })

    return Stops
    
}