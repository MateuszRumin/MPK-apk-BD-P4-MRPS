const { Aliases } = require('../../../models')


exports.all = async (req, res) => {

    try{
    
        const resData =
      await Aliases.FindAll(
            {
                attributes:['id_alias','short','name']
            }
        )



        res.json(resData);

    }
    catch (err) {

        console.error(err);
        res.status(500).json('Wystąpił błąd serwera');
    }

}
