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
        foreignKey:'id_user',
        secureKey:'id_user',
        onDelete:'cascade',
        onUpdate:'cascade',
    })
	}


    return Users 
    
}