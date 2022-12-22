const { mainConnection } = require('../connection')

exports.getAllUsers = async () => {
    const users = await mainConnection('users')
    return users
}