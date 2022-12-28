const { mainConnection } = require('../connection.js');

module.exports.addUser = async (req, res) => {
    try{
        console.log(req.body);
        const { login } = req.body;

        if (!login) throw 'Ошибка получения логина!';

        await mainConnection('users').insert({login: login});
        res.status(200).send('Added');
    }catch(e){
        const error = new Error(e);
        res.status(500).send({error: error.message});
    }
}