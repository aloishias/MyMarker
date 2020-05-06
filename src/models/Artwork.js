const Sequelize = require('sequelize')
const db = require('../config/db.js')

// Model definition
const Artwork = db.define('Artwork', {
    id: {
        type: Sequelize.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4()
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    part_arc_season: {
        type: Sequelize.STRING,
        allowNull: false
    },
    chapter_episode: {
        type: Sequelize.STRING,
        allowNull: false
    },
    type: {
        type: Sequelize.STRING,
        allowNull: false
    },
    user_id: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

module.exports = Artwork