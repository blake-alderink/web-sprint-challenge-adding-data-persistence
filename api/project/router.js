// build your `/api/projects` router here
const express = require('express')
const Projects = require('./model.js')

const router = express.Router();

router.get('/', (req, res) => {
    Projects.getProjects()
    .then(projects => {
        res.status(200).json(projects);
    })
    .catch(err => {
        res.status(404).json({
            message: "projects not found",
            error: err.message
        })
    })
})

router.post('/', (req, res) => {
Projects.postProject(req.body)
    .then(project => {
        res.status(201).json(project)
    })
    .catch(err => {
        res.status(404).json({
            message: "unable to post project"
        })
    })
})



module.exports = router;