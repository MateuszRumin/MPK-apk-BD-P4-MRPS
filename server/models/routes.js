module.exports = (sequelize,DataTypes) => {

    const Routes = sequelize.define("Routes",{
        id_route:{
            type:DataTypes.INTEGER,
            allowNull:false,
            primaryKey:true,
            autoIncrement:true
        },
       id_line:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        id_stop:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        order:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        week:{
            type:DataTypes.BOOLEAN,
            allowNull:false,
            defaultValue:false
        },
        saturday:{
            type:DataTypes.BOOLEAN,
            allowNull:false,
            defaultValue:false
        },
        sunday:{
            type:DataTypes.BOOLEAN,
            allowNull:false,
            defaultValue:false

        },
        not_active:{
            type:DataTypes.BOOLEAN,
            allowNull:false,
            defaultValue:false
        }
        

    })




    Routes.associate = (models) => {
        Routes.belongsTo(models.Lines,{
            foreignKey:'id_line',
			secureKey:'id_line',
			onDelete:'cascade',
			onUpdate:'cascade',
            as:'line'
        }),
        Routes.belongsTo(models.Stops,{
            foreignKey:'id_stop',
			secureKey:'id_stop',
			onDelete:'cascade',
			onUpdate:'cascade',
            as:'stop'
        }),       
        Routes.hasMany(models.RouteTimes,{
            foreignKey:'id_route_a',
            secureKey:'id_route_a',
            onDelete:'cascade',
            onUpdate:'cascade',
            as:'stopA'
            
        }),
        Routes.hasMany(models.RouteTimes,{
            foreignKey:'id_route_b',
            secureKey:'id_route_b',
            onDelete:'cascade',
            onUpdate:'cascade',
            as:'stopB'
            
        })
        Routes.hasMany(models.Departures,{
            foreignKey:'id_route',
            secureKey:'id_route',
            onDelete:'cascade',
            onUpdate:'cascade',
            as:'dep'
            
        })
       
               
        
	}

    

    
    return Routes
    
}