module.exports = (sequelize,DataTypes) => {

    const RouteTimes = sequelize.define("RouteTimes",{
        id_routeTime:{
            type:DataTypes.INTEGER,
            allowNull:false,
            primaryKey:true,
            autoIncrement:true
        },
       id_route:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        id_stop_a:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        id_stop_b:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        mon_fri:{
            type:DataTypes.TIME,
            allowNull:true,
            
        },
        saturday:{
            type:DataTypes.TIME,
            allowNull:true,     
        },
        sunday:{
            type:DataTypes.TIME,
            allowNull:true,           
        },
        direction:{
            type: DataTypes.BOOLEAN,
			allowNull: false,
        },     

    })

    RouteTimes.associate = (models) => {
        RouteTimes.belongsTo(models.Stops,{
            foreignKey:'id_stop_a',
            secureKey:'id_stop_a',
            onDelete:'cascade',
            onUpdate:'cascade',
            as:'stopOne'
            
        }),
        RouteTimes.belongsTo(models.Stops,{
            foreignKey:'id_stop_b',
            secureKey:'id_stop_b',
            onDelete:'cascade',
            onUpdate:'cascade',
            as:'stopTwo'
            
        })
        
    }


        
	

    

    
    return RouteTimes
    
}