// build your `Project` model here

const db = require('../../data/dbConfig')

async function getProjects() {
const projects = await db('projects');

projects.map(task => {
    if (task.project_completed === 0) {
        task.project_completed = false;
    } else task.project_completed = true
})

return projects;
}

function postProject(project) {
return db('projects').insert(project)
.then(([id]) => {
return db('projects').where('project_id', id).first()
}).then(newProject => {
    if (newProject.project_completed === 0) {
        newProject.project_completed = false;
    } else {
        newProject.project_completed = true;
    }
    return newProject;
})

}


module.exports = {
    getProjects,
    postProject,
}
