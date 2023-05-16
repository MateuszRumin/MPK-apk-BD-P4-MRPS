module.exports = (sequelize,DataTypes) => {

    const Times = sequelize.define("Times",{
        id_time:{
            type:DataTypes.INTEGER,
            allowNull:false,
            primaryKey:true,
            autoIncrement:true
        },
        id_stop_one:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        id_stop_two:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        Time_one_two:{
            type:DataTypes.TIME,
            allowNull:false
        },
        Time_two_one:{
            type:DataTypes.TIME,
            allowNull:false
        }
    })


    Times.associate = (models) => {
        Times.belongsTo(models.Stops,{
            foreignKey:'id_stop_one',
            secureKey:'id_stop_one',
            onDelete:'cascade',
            onUpdate:'cascade',
            
        }),
        Times.belongsTo(models.Stops,{
            foreignKey:'id_stop_two',
            secureKey:'id_stop_two',
            onDelete:'cascade',
            onUpdate:'cascade',
            
        })
        
    }
    return Times
    
}