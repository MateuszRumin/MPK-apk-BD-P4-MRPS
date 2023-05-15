module.exports = (sequelize,DataTypes) => {

    const Routes = sequelize.define("Routes",{
        route_id:{
            type:DataTypes.INTEGER,
            allowNull:false,
            primaryKey:true,
            autoIncerement:true
        },
       id_lines:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        id_stops:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        id_wariant:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        order:{
            type:DataTypes.INTEGER,
            allowNull:false
        }

    })

    return Routes
    
}