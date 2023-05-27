module.exports = (sequelize,DataTypes) => {

    const Changes = sequelize.define("Changes",{
        id_change:{
            type:DataTypes.INTEGER,
            allowNull:false,
            primaryKey:true,
            autoIncrement:true
        },   
        date_from:{
            type:DataTypes.DATE,
            allowNull:false
        },
        date_to:{
            type:DataTypes.DATE,
            allowNull:false
        }
                   
        
    })

   Changes.associate = (models) => {
        Changes.hasMany(models.Routes,{
            foreignKey:'id_changes',
			secureKey:'id_changes',
			onDelete:'cascade',
			onUpdate:'cascade',
            as:'change'
        })
               
        
	}

    

    
    return Changes
    
}