module.exports = (sequelize,DataTypes) => {

    const Routes = sequelize.define("Routes",{
        id_route:{
            type:DataTypes.INTEGER,
            allowNull:false,
            primaryKey:true,
            autoIncerement:true
        },
       id_line:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        id_stop:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        id_type:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        order:{
            type:DataTypes.INTEGER,
            allowNull:false
        }

    })

    Routes.associate = (models) => {
		Routes.belongsTo(models.routeTypes,{
            foreignKey:'id_type',
			secureKey:'id_type',
			onDelete:'cascade',
			onUpdate:'cascade',
            as:'type'
        }),
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
        })
        
               
        
	}

    

    
    return Routes
    
}