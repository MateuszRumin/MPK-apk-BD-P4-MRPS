module.exports = (sequelize, DataTypes) => {
	const Departures = sequelize.define('Departures', {
		id_departures: {
			type: DataTypes.INTEGER,
			allowNull:false,
            primaryKey:true,
            autoIncrement:true
		}, 
		id_route: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
        num_passage:{
            type: DataTypes.INTEGER,
			allowNull: false,
        },
        direction:{
            type: DataTypes.BOOLEAN,
			allowNull: false,
        },
		day:{
			type: DataTypes.STRING,
			allowNull: false,
		},
		time: {
			type: DataTypes.TIME,
			allowNull: true,
		}
	
	})

	Departures.associate = (models) => {
		Departures.belongsTo(models.Routes,{
            foreignKey:'id_route',
            secureKey:'id_route',
            onDelete:'cascade',
            onUpdate:'cascade',
            as:'dep'
            
        })
        
    }
	
	

	return Departures
}
