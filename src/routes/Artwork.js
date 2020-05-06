var express = require('express')
var router = express.Router()

const artworksController = require('../controllers/artwork.js')

router.get('/artworks', artworksController.list)
router.get('/artworks/:id', artworksController.getById)
router.post('/artworks', artworksController.createArtwork)
router.put('/artworks/:id', artworksController.updateArtwork)
router.delete('/artworks/:id', artworksController.destroyArtwork)

module.exports = router