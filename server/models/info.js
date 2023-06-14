module.exports = (sequelize,DataTypes) => {

    const Infos = sequelize.define("Infos",{
        id_info:{
            type: DataTypes.INTEGER,
            allowNull:false,
            primaryKey:true,
            autoIncrement:true
        },
      title:{
            type:DataTypes.STRING,
            allowNull:false
        },
      text:{
            type:DataTypes.STRING,
            allowNull:false
        },
        
    })


   
   
			
               
        
	
    

    return Infos
    
}