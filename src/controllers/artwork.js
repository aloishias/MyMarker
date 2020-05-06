const Artwork = require('../models/Artwork.js')
const validateUUID = require('uuid-validate')

module.exports = {
    list(req, res) {
        Artwork.findAll()
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

        Artwork.findAll({
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

    createArtwork(req, res) {
        const {name, part_arc_season, chapter_episode, type, user_id} = req.body

        Artwork.create({
            name: name,
            part_arc_season: part_arc_season,
            chapter_episode: chapter_episode,
            type: type,
            user_id: user_id
        }).then(cas => {
            if (!cas) res.sendStatus(404)
            else res.status(201).send(cas)
        }).catch(err => res.status(500).send(err))
    },

    updateArtwork(req, res) {
        const id = req.params.id
        const {name, part_arc_season, chapter_episode, type, user_id} = req.body

        Artwork.update({
            name, 
            part_arc_season,
            chapter_episode,
            type,
            user_id
        }, {
            where: {
                id: id
            }
        }).then(cas => {
            if (!cas) res.sendStatus(404)
            else res.status(200).send(cas)
        }).catch(err => res.status(500).send(err))
    },

    destroyArtwork(req, res) {
        const id = req.params.id

        if (!validateUUID(id))
            return res.sendStatus(400)

        Artwork.destroy({
                where: {
                    id: id
                }
            }).then(() => res.sendStatus(204))
            .catch(err => res.status(500).send(err));
    }

}