module.exports = (sequelize,DataTypes) => {

    const RouteTimes = sequelize.define("RouteTimes",{
        id_routeTime:{
            type:DataTypes.INTEGER,
            allowNull:false,
            primaryKey:true,
            autoIncrement:true
        },
        id_route_a:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        id_route_b:{
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
        RouteTimes.belongsTo(models.Routes,{
            foreignKey:'id_route_a',
            secureKey:'id_route_a',
            onDelete:'cascade',
            onUpdate:'cascade',
            as:'stopOne'
            
        }),
        RouteTimes.belongsTo(models.Routes,{
            foreignKey:'id_route_b',
            secureKey:'id_route_b',
            onDelete:'cascade',
            onUpdate:'cascade',
            as:'stopTwo'
            
        })
        
    }


        
	

    

    
    return RouteTimes
    
}