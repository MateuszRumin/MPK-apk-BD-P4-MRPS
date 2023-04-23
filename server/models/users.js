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
    

    return Users 
    
}