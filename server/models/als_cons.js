module.exports = (sequelize,DataTypes) => {

    const Als_cons = sequelize.define("Als_cons",{
        id_als_con:{
            type:DataTypes.INTEGER,
            allowNull:false,
            primaryKey:true,
            autoIncrement:true
        },   
        id_departures:{
            type:DataTypes.INTEGER,
            allowNull:true
        },
        id_line:{
            type:DataTypes.INTEGER,
            allowNull:true
        },
        id_alias:{
            type:DataTypes.INTEGER,
            allowNull:false
        }
                   
        
    })

    Als_cons.associate = (models) => {
        Als_cons.belongsTo(models.Departures,{
            foreignKey:'id_departures',
			secureKey:'id_departures',
			onDelete:'cascade',
			onUpdate:'cascade',
            as:'dept'
        }),
        Als_cons.belongsTo(models.Lines,{
            foreignKey:'id_line',
			secureKey:'id_line',
			onDelete:'cascade',
			onUpdate:'cascade',
            as:'lines'
        }),
        Als_cons.belongsTo(models.Aliases,{
            foreignKey:'id_alias',
			secureKey:'id_alias',
			onDelete:'cascade',
			onUpdate:'cascade',
            as:'alias'
        })
    }
    

    
    return Als_cons
    
}