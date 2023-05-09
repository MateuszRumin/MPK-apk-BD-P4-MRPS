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
		Roles.hasOne(models.Usr_emp,{
			primaryKey:'id_role',
			targetKey:'role',
			name:'fk_rol_rol',
			onDelete:'cascade',
			onUpdate:'cascade'
		})
	}
    

    return Roles
    
}