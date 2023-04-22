module.exports = (sequelize,DataTypes) => {

    const Routes = sequelize.define("Routes",{
        route_id:{
            type:DataTypes.INTEGER,
            allowNull:false,
            primaryKey:true,
            autoIncerement:true
        },
        lines_id:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        stop_id:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        variant_id:{
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