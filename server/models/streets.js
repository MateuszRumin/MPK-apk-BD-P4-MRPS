module.exports = (sequelize,DataTypes) => {

    const Streets = sequelize.define("Streets",{
        street_id:{
            type:DataTypes.INTEGER,
            allowNull:false,
            primaryKey:true,
            autoIncrement:true
        },
        name:{
            type:DataTypes.STRING,
            allowNull:false
        }
    })

    return Streets
    
}