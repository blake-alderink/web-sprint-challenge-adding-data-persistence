// build your `/api/tasks` router here
const express = require('express')
const Tasks = require('./model.js')

const router = express.Router();

router.get('/', (req, res) => {
    Tasks.getTasks()
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

    if (!req.body.project_id) {
        res.status(404).json({
            message: "hah it did not work"
        })
    } else {
Tasks.postTask(req.body)
    .then(resource => {
        res.status(201).json(resource)
    })
    .catch(err => {
        res.status(404).json({
            message: "unable to post resource"
        })
    })
}
})



module.exports = router;