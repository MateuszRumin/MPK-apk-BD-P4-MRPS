module.exports = (sequelize, DataTypes) => {
	const Passings = sequelize.define('Passings', {
		id_pass: {
			type: DataTypes.INTEGER,
			allowNull:false,
            primaryKey:true,
            autoIncrement:true
		}, 
		id_route_o: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
        id_route_t: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		direction:{
			type: DataTypes.BOOLEAN,
			allowNull: false,
		},
		time_morning: {
			type: DataTypes.TIME,
			allowNull: false,
		},
		time_miday: {
			type: DataTypes.TIME,
			allowNull: false,
		},
		time_evn: {
			type: DataTypes.TIME,
			allowNull: false,
		},
		time_night: {
			type: DataTypes.TIME,
			allowNull: true,
		},
	
	})

	
	

	return Passings
}
