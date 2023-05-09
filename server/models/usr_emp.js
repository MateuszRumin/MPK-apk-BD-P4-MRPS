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
        id_user:{
            type:DataTypes.INTEGER,
            allowNull:true
        },
       id_role:{
            type:DataTypes.INTEGER,
            allowNull:false
        }    
    },
    {
        freezeTableName: true
    })
    
    Usr_emp.associate = (models) => {
		Usr_emp.belongsTo(models.Employees,{
            foreignKey: 'emp_no',
            secureKey:'emp_no',
            onDelete:'cascade',
			onUpdate:'cascade',
        }),
        Usr_emp.belongsTo(models.Users,{
			foreignKey:'id_user',
            secureKey:'id_user',
			onDelete:'cascade',
			onUpdate:'cascade',		
		}),
        Usr_emp.belongsTo(models.Roles,{
			foreignKey:'id_role',
			secureKey:'id_role',
			onDelete:'cascade',
			onUpdate:'cascade',    
		})
	}

    return Usr_emp
    
}