

const { Departures, Routes,RouteTimes } = require('../../../models')
const { timeToSeconds, secondsToTime }=require('../../functions/time')

async function updweek (passage,dat,time,before){
                try {
                    
                    
                    let values = {
                        num_passage: passage,
                        id_route: dat.id_route,
                        day: 'week',
                        direction: true,
                    };
                let datatime
                
                let tim   
                
                
                    if(before === null){
                
                        tim  = {
                            time:time
                        }
                        


                    }
                    
                    if(before !== null){
                        
                        
                        
                    let oldTime =  timeToSeconds(before.time);  
                        

                    let timeIds = {
                        id_route_a: before.id_route,
                        id_route_b: dat.id_route,
                        direction:true
                        };

                        
                        datatime = await RouteTimes.findOne({ where: timeIds });

                        if (timeToSeconds('03:00:00') < oldTime && oldTime < timeToSeconds('11:00:00')) {
                            tim = {
                                time:secondsToTime(((oldTime+timeToSeconds(datatime.week_mor)) % (24*3600)))
                                } 
                        
                        } else if (timeToSeconds('11:00:00') < oldTime && oldTime < timeToSeconds('19:00:00')) {
                            tim = {
                                time:secondsToTime(((oldTime+timeToSeconds(datatime.week_mid)) % (24*3600)))
                                }                
                        } else {
                            tim = {
                                time:secondsToTime(((oldTime+timeToSeconds(datatime.week_eve)) % (24*3600)))
                                }    
                        }
                        
                    }

                    
                   
                    
                   await Departures.update(
                            tim, // Updated values
                            { where: values  } // Condition to match the records to be updated
                        )
                            .then((affectedRows) => {
                            console.log(`${affectedRows} rekordów zmodyfikowanych`);
                            })

                  before = await Departures.findOne({where:{...tim,...values}})         
                  


                return before
                }
                catch (err){
                    console.log("bląd")
                }
}



async function updweekBack (passage,dat,before,first){
    try {

        let values = {
            num_passage: passage,
            id_route: dat.id_route,
            day: 'week',
            direction: false,
        };
    let datatime 
    let tim   
    
    
    if( first === null){
        
        
        tim  = {
            time:secondsToTime(((timeToSeconds(before.time)+timeToSeconds('00:06:00'))% (24*3600)))
        }
        
            


        }
        
        if(first !== null){

        let oldTime =  timeToSeconds(before.time);  
            
                    
        let timeIds = {
            id_route_a: dat.id_route,
            id_route_b: before.id_route,
            direction:false
            };
           
            datatime = await RouteTimes.findOne({ where: timeIds });
            
            if (timeToSeconds('03:00:00') < oldTime && oldTime < timeToSeconds('11:00:00')) {
                tim = {
                    time:secondsToTime(((oldTime+timeToSeconds(datatime.week_mor)) % (24*3600)))
                    } 
            
            } else if (timeToSeconds('11:00:00') < oldTime && oldTime < timeToSeconds('19:00:00')) {
                tim = {
                    time:secondsToTime(((oldTime+timeToSeconds(datatime.week_mid)) % (24*3600)))
                    }                
            } else {
                tim = {
                    time:secondsToTime(((oldTime+timeToSeconds(datatime.week_eve)) % (24*3600)))
                    }    
            }
            

            


        }


        
        await Departures.update(
            tim, // Updated values
            { where: values  } // Condition to match the records to be updated
        )
            .then((affectedRows) => {
            console.log(`${affectedRows} rekordów zmodyfikowanych`);
            })

        before = await Departures.findOne({where:{...tim,...values}})  
        
    return before
    }
    catch (err){
        console.log(err)
    }



}




async function updsb (passage,dat,time,before){
                try {
                    
                    
                    let values = {
                        num_passage: passage,
                        id_route: dat.id_route,
                        day: 'saturday',
                        direction: true,
                    };
                let datatime
                
                let tim   
                
                
                    if(before === null){
                
                        tim  = {
                            time:time
                        }
                        


                    }
                    
                    if(before !== null){
                        
                        
                        
                    let oldTime =  timeToSeconds(before.time);  
                        

                    let timeIds = {
                        id_route_a: before.id_route,
                        id_route_b: dat.id_route,
                        direction:true
                        };

                        
                        datatime = await RouteTimes.findOne({ where: timeIds });

                        if (timeToSeconds('03:00:00') < oldTime && oldTime < timeToSeconds('11:00:00')) {
                            tim = {
                                time:secondsToTime(((oldTime+timeToSeconds(datatime.saturday_mor)) % (24*3600)))
                                } 
                        
                        } else if (timeToSeconds('11:00:00') < oldTime && oldTime < timeToSeconds('19:00:00')) {
                            tim = {
                                time:secondsToTime(((oldTime+timeToSeconds(datatime.saturday_mid)) % (24*3600)))
                                }                
                        } else {
                            tim = {
                                time:secondsToTime(((oldTime+timeToSeconds(datatime.saturday_eve)) % (24*3600)))
                                }    
                        }
                        
                    }

                    
                   
                    
                   await Departures.update(
                            tim, // Updated values
                            { where: values  } // Condition to match the records to be updated
                        )
                            .then((affectedRows) => {
                            console.log(`${affectedRows} rekordów zmodyfikowanych`);
                            })

                  before = await Departures.findOne({where:{...tim,...values}})         
                  


                return before
                }
                catch (err){
                    console.log("bląd")
                }
}



async function updsbBack (passage,dat,before,first){
    try {

        let values = {
            num_passage: passage,
            id_route: dat.id_route,
            day: 'saturday',
            direction: false,
        };
    let datatime 
    let tim   
    
    
    if( first === null){
        
        
        tim  = {
            time:secondsToTime(((timeToSeconds(before.time)+timeToSeconds('00:06:00'))% (24*3600)))
        }
        
            


        }
        
        if(first !== null){

        let oldTime =  timeToSeconds(before.time);  
            
                    
        let timeIds = {
            id_route_a: dat.id_route,
            id_route_b: before.id_route,
            direction:false
            };
           
            datatime = await RouteTimes.findOne({ where: timeIds });
            
            if (timeToSeconds('03:00:00') < oldTime && oldTime < timeToSeconds('11:00:00')) {
                tim = {
                    time:secondsToTime(((oldTime+timeToSeconds(datatime.saturday_mor)) % (24*3600)))
                    } 
            
            } else if (timeToSeconds('11:00:00') < oldTime && oldTime < timeToSeconds('19:00:00')) {
                tim = {
                    time:secondsToTime(((oldTime+timeToSeconds(datatime.saturday_mid)) % (24*3600)))
                    }                
            } else {
                tim = {
                    time:secondsToTime(((oldTime+timeToSeconds(datatime.saturday_eve)) % (24*3600)))
                    }    
            }
            

            


        }


        
        await Departures.update(
            tim, // Updated values
            { where: values  } // Condition to match the records to be updated
        )
            .then((affectedRows) => {
            console.log(`${affectedRows} rekordów zmodyfikowanych`);
            })

        before = await Departures.findOne({where:{...tim,...values}})  
        
    return before
    }
    catch (err){
        console.log(err)
    }



}







async function updnd (passage,dat,time,before){
                try {
                    
                    
                    let values = {
                        num_passage: passage,
                        id_route: dat.id_route,
                        day: 'sunday',
                        direction: true,
                    };
                let datatime
                
                let tim   
                
                
                    if(before === null){
                
                        tim  = {
                            time:time
                        }
                        


                    }
                    
                    if(before !== null){
                        
                        
                        
                    let oldTime =  timeToSeconds(before.time);  
                        

                    let timeIds = {
                        id_route_a: before.id_route,
                        id_route_b: dat.id_route,
                        direction:true
                        };

                        
                        datatime = await RouteTimes.findOne({ where: timeIds });

                        if (timeToSeconds('03:00:00') < oldTime && oldTime < timeToSeconds('11:00:00')) {
                            tim = {
                                time:secondsToTime(((oldTime+timeToSeconds(datatime.sunday_mor)) % (24*3600)))
                                } 
                        
                        } else if (timeToSeconds('11:00:00') < oldTime && oldTime < timeToSeconds('19:00:00')) {
                            tim = {
                                time:secondsToTime(((oldTime+timeToSeconds(datatime.sunday_mid)) % (24*3600)))
                                }                
                        } else {
                            tim = {
                                time:secondsToTime(((oldTime+timeToSeconds(datatime.sunday_eve)) % (24*3600)))
                                }    
                        }
                        
                    }

                    
                   
                    
                   await Departures.update(
                            tim, // Updated values
                            { where: values  } // Condition to match the records to be updated
                        )
                            .then((affectedRows) => {
                            console.log(`${affectedRows} rekordów zmodyfikowanych`);
                            })

                  before = await Departures.findOne({where:{...tim,...values}})         
                  


                return before
                }
                catch (err){
                    console.log("bląd")
                }
}



async function updndBack (passage,dat,before,first){
    try {

        let values = {
            num_passage: passage,
            id_route: dat.id_route,
            day: 'sunday',
            direction: false,
        };
    let datatime 
    let tim   
    
    
    if( first === null){
        
        
        tim  = {
            time:secondsToTime(((timeToSeconds(before.time)+timeToSeconds('00:06:00'))% (24*3600)))
        }
        
            


        }
        
        if(first !== null){

        let oldTime =  timeToSeconds(before.time);  
            
                    
        let timeIds = {
            id_route_a: dat.id_route,
            id_route_b: before.id_route,
            direction:false
            };
           
            datatime = await RouteTimes.findOne({ where: timeIds });
            
            if (timeToSeconds('03:00:00') < oldTime && oldTime < timeToSeconds('11:00:00')) {
                tim = {
                    time:secondsToTime(((oldTime+timeToSeconds(datatime.sunday_mor)) % (24*3600)))
                    } 
            
            } else if (timeToSeconds('11:00:00') < oldTime && oldTime < timeToSeconds('19:00:00')) {
                tim = {
                    time:secondsToTime(((oldTime+timeToSeconds(datatime.sunday_mid)) % (24*3600)))
                    }                
            } else {
                tim = {
                    time:secondsToTime(((oldTime+timeToSeconds(datatime.sunday_eve)) % (24*3600)))
                    }    
            }
            

            


        }
    
        await Departures.update(
            tim, // Updated values
            { where: values  } // Condition to match the records to be updated
        )
            .then((affectedRows) => {
            console.log(`${affectedRows} rekordów zmodyfikowanych`);
            })

        before = await Departures.findOne({where:{...tim,...values}})  
        
    return before
    }
    catch (err){
        console.log(err)
    }



}








//wypisz wszystkie
exports.update = async (req, res) => {
    try {

    const data = req.body;

    
  
    let passage=data.num_passage 
     
    const time=data.time
    
   





    
    if(data.day === 'week')
    {

    let mapRoute = await Routes.findAll({where:{id_line:data.id_line,week:true},order:[['order','ASC']]})
    let before = null
 
    
    for (let dat of mapRoute){     
            
          let bef = await updweek(passage,dat,time,before)
          before=bef
          
        }
        

       let first = null
         mapRoute = await Routes.findAll({where:{id_line:data.id_line,week:true},order:[['order','DESC']]})

         for (let dat of mapRoute){     
            bef = await  updndBack(passage,dat,before,first)
           
            before=bef
            first = 'nie'
        }

    }
    
    
    
    
    if(data.day === 'saturday')
    {

    let mapRoute = await Routes.findAll({where:{id_line:data.id_line,saturday:true},order:[['order','ASC']]})
    let before = null
 
    
    for (let dat of mapRoute){     
            
          let bef = await updsb(passage,dat,time,before)
          before=bef
          
        }
        

       let first = null
         mapRoute = await Routes.findAll({where:{id_line:data.id_line,saturday:true},order:[['order','DESC']]})

         for (let dat of mapRoute){     
            bef = await  updsbBack(passage,dat,before,first)
            
            before=bef
            first = 'nie'
        }

    }
    
    
    if(data.day === 'sunday')
    {

    let mapRoute = await Routes.findAll({where:{id_line:data.id_line,sunday:true},order:[['order','ASC']]})
    let before = null
    
    for (let dat of mapRoute){               
          let bef = await updnd(passage,dat,time,before)
          before=bef          
        }
        

       let first = null
         mapRoute = await Routes.findAll({where:{id_line:data.id_line,sunday:true},order:[['order','DESC']]})

         for (let dat of mapRoute){     
            bef = await  updndBack(passage,dat,before,first)
            
            before=bef
            first = 'nie'
        }

    }
      
        














        res.json("Added")
    }
    catch (err) {
        console.log(err);
        res.json("Problemy z kodem")
        
    }



	
}

