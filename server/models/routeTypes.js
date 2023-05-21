module.exports = (sequelize,DataTypes) => {

    const routeTypes = sequelize.define("routeTypes",{
        id_route_type:{
            type:DataTypes.INTEGER,
            allowNull:false,
            primaryKey:true,
            autoIncrement:true
        },
       name:{
            type:DataTypes.STRING,
            allowNull:false
      
        }


        
    })

    routeTypes.associate = (models) => {
		routeTypes.hasMany(models.Routes,{
            foreignKey:'id_type',
			secureKey:'id_type',
			onDelete:'cascade',
			onUpdate:'cascade',
            as:'type'
        })
        
               
        
	}

    return routeTypes
    
}