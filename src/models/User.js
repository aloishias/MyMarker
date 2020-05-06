const Sequelize = require('sequelize')
const db = require('../config/db.js')

// Model definition
const User = db.define('User', {
    id: {
        type: Sequelize.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4()
    },
    login: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    password: {
        type: Sequelize.STRING,
        allowNull: true
    }
})

module.exports = User