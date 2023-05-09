module.exports = (sequelize,DataTypes) => {

    const Usr_emp = sequelize.define("Usr_emp",{
        id_usr_emp:{
            type: DataTypes.INTEGER,
            allowNull:false,
            primaryKey:true,
            autoIncrement:true
        },
        emp_no:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        user_id:{
            type:DataTypes.INTEGER,
            allowNull:true
        },
        role_id:{
            type:DataTypes.INTEGER,
            allowNull:false
        }    
    },
    {
        freezeTableName: true
    })
    
    Usr_emp.associate = (models) => {
		Usr_emp.belongsTo(models.Employees),
        Usr_emp.belongsTo(models.Users),
        Usr_emp.belongsTo(models.Roles)
	}

    return Usr_emp
    
}