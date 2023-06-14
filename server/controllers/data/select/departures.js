
const { Departures,Routes,Stops } = require('../../../models')


//wypisz wszystkie
exports.onstop = async (req, res) => {
   

   
   
        try {
            const data = req.body;
    
            const departures = await Departures.findAll({
                where: {
                    day: data.day,
                    direction: data.direction
                },
                include: [
                    {
                        model: Routes,
                        required: true,
                        left: true,
                        attributes: ['name'],
                        where: {
                            not_active: false,
                            id_route:data.id_route
                        },
                        attributes: [],
                        as:'dep'
                    }
                ],
                attributes: [
                    'num_passage',
                    'time'
                ],
                order: [
                    ['time', 'ASC']
                ]
            });
    
            res.json(departures);

        } catch (err) {
            console.error(err);
            res.status(500).json('Wystąpił błąd serwera');
        }
    
    


}


exports.toModify = async (req, res) => {
   

   
   
    try {
        const data = req.body;




        const departures = await Departures.findAll({
            where: {
                day: data.day,
                direction: true,
                num_passage:"1"
            },
            include: [
                {
                    model: Routes,
                    required: true,
                    left: true,
                    attributes: ['name'],
                    where: {
                        not_active: false,
                        id_line:data.id_line,                   
                    },
                    attributes: [],
                    as:'dep'
                }
            ],
            attributes: [
                'num_passage',
                'time'
            ],
            order: [
                ['time', 'ASC']
            ]
        });

        res.json(departures);

    } catch (err) {
        console.error(err);
        res.status(500).json('Wystąpił błąd serwera');
    }




}
