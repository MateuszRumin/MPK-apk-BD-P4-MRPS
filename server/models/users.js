module.exports = (sequelize,DataTypes) => {

    const Users = sequelize.define("Users",{
        id_user:{
            type: DataTypes.INTEGER,
            allowNull:false,
            primaryKey:true,
            autoIncrement:true
        },
        username:{
            type:DataTypes.STRING,
            allowNull:false
        },
        password:{
            type:DataTypes.CHAR,
            allowNull:false
        },
        email:{
            type:DataTypes.CHAR,
            allowNull:false
        }    
    })
    Users.associate = (models) => {
		Users.hasOne(models.Usr_emp,{
			primaryKey:'id_user',
			targetKey:'user_id',
			name:'fk_usr_usr',
			onDelete:'cascade',
			onUpdate:'cascade'
		})
	}


    return Users 
    
}