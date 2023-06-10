module.exports = (sequelize,DataTypes) => {

    const Aliases = sequelize.define("Aliases",{
        id_alias:{
            type:DataTypes.INTEGER,
            allowNull:false,
            primaryKey:true,
            autoIncrement:true
        },   
        short:{
            type:DataTypes.STRING,
            allowNull:false
        },
        name:{
            type:DataTypes.STRING,
            allowNull:false
        }   
    })

    Aliases.associate = (models) => {
        Aliases.hasMany(models.Als_cons,{
            foreignKey:'id_alias',
			secureKey:'id_alias',
			onDelete:'cascade',
			onUpdate:'cascade',
            as:'change'
        })
                
	}
  

    

    
    return Aliases
    
}