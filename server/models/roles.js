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
   
    Roles.associate = (models) => {
		Roles.hasMany(models.Usr_emp,{
            foreignKey:'id_role',
			secureKey:'id_role',
			onDelete:'cascade',
			onUpdate:'cascade',
			
               
        })
	}
    

    return Roles
    
}