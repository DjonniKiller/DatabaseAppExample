const userRepo = require('../repositories/users.repo.js')

const Users = [{
    id: 1,
    fcs: 'Ryabko Evgenij Romanovich'
},{
    id: 2,
    fcs: 'Gusev Denis Dmitrievich'
},{
    id: 3,
    fcs: 'Kovalenko Andrey Vyacheslavovich'
}];

module.exports.getUserByID = (req, res) => {
    try{
        const id = req.params.id;
        
        if (!id) throw 'not found id';

        const user = Users.find((el) => parseInt(el.id) === parseInt(id));

        if (!user) throw 'Cannot find this user!';   
        else res.status(200).send({ user });
            
    } catch(e) {
        const error = new Error(e);
        res.status(500).send({error: error.message});
    }
}

module.exports.getAllUsers = async (req, res) => {
    const users = await userRepo.getAllUsers()
    res.status(200).send(users)
}