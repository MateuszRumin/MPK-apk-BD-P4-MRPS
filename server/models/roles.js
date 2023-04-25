module.exports = (sequelize,DataTypes) => {

    const Roles = sequelize.define("Roles",{
        id_role:{
            type: DataTypes.INTEGER,
            allowNull:false,
            primaryKey:true,
            autoIncrement:true
        },
        name:{
            type:DataTypes.STRING(100),
            allowNull:false
        }
        
        
    })
   
    

    return Roles
    
}