module.exports = (sequelize,DataTypes) => {

    const StopTimes = sequelize.define("StopTimes",{
        id_time:{
            type:DataTypes.INTEGER,
            allowNull:false,
            primaryKey:true,
            autoIncrement:true
        },
        id_stop_a:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        id_stop_b:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
    
        week_mor:{
            type:DataTypes.TIME,
            allowNull:true,
            
        },
        week_mid:{
            type:DataTypes.TIME,
            allowNull:true,
            
        },
        week_eve:{
            type:DataTypes.TIME,
            allowNull:true,
            
        },
        saturday_mor:{
            type:DataTypes.TIME,
            allowNull:true,     
        },
        saturday_mid:{
            type:DataTypes.TIME,
            allowNull:true,     
        },
        saturday_eve:{
            type:DataTypes.TIME,
            allowNull:true,     
        },
        sunday_mor:{
            type:DataTypes.TIME,
            allowNull:true,           
        },
        sunday_mid:{
            type:DataTypes.TIME,
            allowNull:true,           
        },
        sunday_eve:{
            type:DataTypes.TIME,
            allowNull:true,           
        },
        direction:{
            type: DataTypes.BOOLEAN,
			allowNull: false,
        },     

    })


    StopTimes.associate = (models) => {
        StopTimes.belongsTo(models.Stops,{
            foreignKey:'id_stop_a',
            secureKey:'id_stop_a',
            onDelete:'cascade',
            onUpdate:'cascade',
            as:'stopOne'
            
        }),
        StopTimes.belongsTo(models.Stops,{
            foreignKey:'id_stop_b',
            secureKey:'id_stop_b',
            onDelete:'cascade',
            onUpdate:'cascade',
            as:'stopTwo'
            
        })
        
    }
    return StopTimes
    
}