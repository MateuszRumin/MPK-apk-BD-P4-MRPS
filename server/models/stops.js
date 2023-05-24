module.exports = (sequelize,DataTypes) => {

    const Stops = sequelize.define("Stops",{
        id_stop:{
            type:DataTypes.INTEGER,
            allowNull:false,
            primaryKey:true,
            autoIncrement:true
        },
        name:{
            type:DataTypes.STRING,
            allowNull:false
        },
        id_street:{
            type:DataTypes.INTEGER,
            allowNull:false
        }
    })

    Stops.associate = (models) => {
            Stops.belongsTo(models.Streets,{
                foreignKey:'id_street',
                secureKey:'id_street',
                onDelete:'cascade',
                onUpdate:'cascade',
                
            }),
            Stops.hasMany(models.StopTimes,{
                foreignKey:'id_stop_a',
                secureKey:'id_stop_a',
                onDelete:'cascade',
                onUpdate:'cascade',
                as:'stopOne'
                
            }),
            Stops.hasMany(models.StopTimes,{
                foreignKey:'id_stop_b',
                secureKey:'id_stop_b',
                onDelete:'cascade',
                onUpdate:'cascade',
                as:'stopTwo'
                
            }),
            Stops.hasMany(models.Routes,{
                foreignKey:'id_stop',
                secureKey:'id_stop',
                onDelete:'cascade',
                onUpdate:'cascade',
                as:'stop'
            }),
            Stops.hasMany(models.RouteTimes,{
                foreignKey:'id_stop_a',
                secureKey:'id_stop_a',
                onDelete:'cascade',
                onUpdate:'cascade',
                as:'stopA'
                
            }),
            Stops.hasMany(models.RouteTimes,{
                foreignKey:'id_stop_b',
                secureKey:'id_stop_b',
                onDelete:'cascade',
                onUpdate:'cascade',
                as:'stopB'
                
            })
            
        }

    return Stops
    
}