module.exports = (sequelize,DataTypes) => {

    const Roles = sequelize.define("Roles",{
        id_role:{
            type: DataTypes.INTEGER,
            allowNull:false,
            primaryKey:true,
        },
        name:{
            type:DataTypes.STRING(100),
            allowNull:false
        }
        
        
    })
    Roles.associate = (models) => {
        Roles.hasMany(models.Employees),
        Roles.hasMany(models.Users)
    }  
    

    return Roles
    
}