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
            Stops.hasMany(models.Times,{
                foreignKey:'id_stop_one',
                secureKey:'id_stop_one',
                onDelete:'cascade',
                onUpdate:'cascade',
                as:'stopOne'
                
            }),
            Stops.hasMany(models.Times,{
                foreignKey:'id_stop_two',
                secureKey:'id_stop_two',
                onDelete:'cascade',
                onUpdate:'cascade',
                as:'stopTwo'
                
            }),
            Stops.hasMany(models.Lines,{
                foreignKey:'id_stop_from',
                secureKey:'id_stop_from',
                onDelete:'set null',
                onUpdate:'cascade',
                as:'stopFrom'
                
            }),
            Stops.hasMany(models.Lines,{
                foreignKey:'id_stop_to',
			    secureKey:'id_stop_to',
                onDelete:'set null',
                onUpdate:'cascade',
                as:'stopTo'
                
            })
            
        }

    return Stops
    
}