module.exports = (sequelize,DataTypes) => {

    const Lines = sequelize.define("Lines",{
        id_line:{
            type: DataTypes.INTEGER,
            allowNull:false,
            primaryKey:true,
            autoIncrement:true
        },
       num_line:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        id_stop_from:{
            type:DataTypes.INTEGER,
            allowNull:true
        },
        id_stop_to:{
            type:DataTypes.INTEGER,
            allowNull:true
        }
        
    })


   
    Lines.associate = (models) => {
		Lines.belongsTo(models.Stops,{
            foreignKey:'id_stop_from',
			secureKey:'id_stop_from',
			onDelete:'set null',
			onUpdate:'cascade',
            as:'stopFrom'
        }),
        Lines.belongsTo(models.Stops,{
            foreignKey:'id_stop_to',
			secureKey:'id_stop_to',
			onDelete:'set null',
			onUpdate:'cascade',
            as:'stopTo'
        })
			
               
        
	}
    

    return Lines
    
}