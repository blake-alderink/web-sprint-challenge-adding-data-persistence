// build your `/api/resources` router here
const express = require('express')
const Resources = require('./model.js')

const router = express.Router();

router.get('/', (req, res) => {
    Resources.getResources()
    .then(resources => {
        res.status(200).json(resources);
    })
    .catch(err => {
        res.status(404).json({
            message: "resources not found",
            error: err.message
        })
    })
})

router.post('/', (req, res) => {
Resources.postResource(req.body)
    .then(resource => {
        res.status(201).json(resource)
    })
    .catch(err => {
        res.status(404).json({
            message: "unable to post resource"
        })
    })
})



module.exports = router;