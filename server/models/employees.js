module.exports = (sequelize,DataTypes) => {

    const Employees = sequelize.define("Employees",{
        emp_no:{
            type:DataTypes.INTEGER,
            allowNull:false,
            primaryKey:true,
            autoIncerement:true
        },
        first_name:{
            type:DataTypes.STRING,
            allowNull:false
        },
        second_name:{
            type:DataTypes.STRING,
            allowNull:false
        },
        addres:{
            type:DataTypes.STRING,
            allowNull:false
        },
        pesel:{
            type:DataTypes.CHAR(255),
            allowNull:false
        },
        tel_num:{
            type:DataTypes.CHAR(255),
            allowNull:false
        },
        role_id:{
            type:DataTypes.INTEGER,
            allowNull:false
        }

    });
    Employees.associate = (models) => {
        Employees.belongsTo(models.Roles, {
            foreignKey:'role_id',
            targetKey: 'id_role',
            onDelate:"set null"
        }),
        Employees.hasOne(models.Users)
        
    }

    return Employees
}