const { mainConnection } = require('../connection');
const knex = require('knex');

module.exports.addUser = async (req, res) => {
    try{
        const { login } = req.body;

        if (!login) throw 'Cannot get login!';

        await mainConnection('users').insert({login: login});
        res.status(200).send('Added');
    }catch(e){
        const error = new Error(e);
        res.status(500).send({error: error.message});
    }
}