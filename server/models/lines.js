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
        }
        
    })


   
    Lines.associate = (models) => {
        Lines.hasMany(models.Routes,{
            foreignKey:'id_line',
			secureKey:'id_line',
			onDelete:'cascade',
			onUpdate:'cascade',
            as:'line'
        })
			
               
        
	}
    

    return Lines
    
}