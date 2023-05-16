module.exports = (sequelize,DataTypes) => {

    const Streets = sequelize.define("Streets",{
        id_street:{
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

    Streets.associate = (models) => {
		Streets.hasMany(models.Stops,{
			foreignKey:'id_street',
			secureKey:'id_street',
			onDelete:'cascade',
			onUpdate:'cascade',
            
		})
	}

    return Streets
    
}