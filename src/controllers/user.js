const User = require('../models/User.js')
const validateUUID = require('uuid-validate')

module.exports = {
    list(req, res) {
        User.findAll()
            .then(cas => {
                if (!cas) res.sendStatus(404)
                else res.status(200).send(cas)
            })
            .catch(err => res.status(500).send(err))
    },

    getById(req, res) {
        const id = req.params.id

        if (!validateUUID(id))
            return res.sendStatus(400)

        User.findAll({
                where: {
                    id: id
                }
            })
            .then(cas => {
                if (!cas) res.sendStatus(404)
                else res.status(200).send(cas)
            })
            .catch(err => res.status(500).send(err))
    },

    createUser(req, res) {
        const {login, password} = req.body

        User.create({
            login: login,
            password: password
        }).then(cas => {
            if (!cas) res.sendStatus(404)
            else res.status(201).send(cas)
        }).catch(err => res.status(500).send(err))
    },

    updateUser(req, res) {
        const id = req.params.id
        const {login, password} = req.body

        User.update({
            login, 
            password
        }, {
            where: {
                id: id
            }
        }).then(cas => {
            if (!cas) res.sendStatus(404)
            else res.status(200).send(cas)
        }).catch(err => res.status(500).send(err))
    },

    destroyUser(req, res) {
        const id = req.params.id

        if (!validateUUID(id))
            return res.sendStatus(400)

        User.destroy({
                where: {
                    id: id
                }
            }).then(() => res.sendStatus(204))
            .catch(err => res.status(500).send(err));
    }

}