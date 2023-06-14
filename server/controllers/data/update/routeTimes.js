const { RouteTimes } = require('../../../models')


//wypisz wszystkie

    

exports.update = async (req, res) => {

    try{
    const data = req.body
    const toUpdate = {  
    week_mor:data.week_mor ,
    week_mid:data.week_mid ,
    week_eve:data.week_eve ,
    saturday_mor:data.saturday_mor,
    saturday_mid:data.saturday_mid,
    saturday_eve:data.saturday_eve,
    sunday_mor: data.sunday_mor,
    sunday_mid: data.sunday_mid,
    sunday_eve: data.sunday_eve,  
    }
    const id = data.id_routeTime


    RouteTimes.update(
        toUpdate, // Updated values
        { where: { id_routeTime: id } } // Condition to match the records to be updated
      )
        .then((affectedRows) => {
          console.log(`${affectedRows} rekordów zmodyfikowanych`);
        })
        .catch((error) => {
          console.error('Error', error);
        });


    
      } catch (err) {
        console.error(err);
        res.status(500).json('Wystąpił błąd serwera');
    }
    

       




    }
