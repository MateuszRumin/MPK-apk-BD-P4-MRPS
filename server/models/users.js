module.exports = (sequelize,DataTypes) => {

    const Users = sequelize.define("Users",{
        id_user:{
            type: DataTypes.INTEGER,
            allowNull:false,
            primaryKey:true,
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
        },
        role_id:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        employee_id:{
            type:DataTypes.INTEGER,
            allowNull:false
        }

        
        
    })
    Users.associate = (models) => {
        Users.belongsTo(models.Employees, {
            foreignKey:'employee_id',
            targetKey: 'emp_no',
            onDelate:'CASCADE'
    
        }),
        Users.belongsTo(models.Roles, {
            foreignKey:'role_id',         
            targetKey: 'id_role',
        })
    }  

    return Users 
    
}