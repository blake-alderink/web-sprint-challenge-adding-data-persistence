// build your `Task` model here
const db = require('../../data/dbConfig')

async function getTasks() {
const tasks = await db.select('*').from('tasks').join('projects', 'projects.project_id', '=', 'tasks.project_id')

tasks.map(task => {
    if (task.task_completed === 0) {
        task.task_completed = false;
    } else task.task_completed = true
})


return tasks;

}

function postTask(project) {
    return db('tasks').insert(project)
    .then(([id]) => {
    return db('tasks').where('task_id', id).first()
    }).then(newProject => {
        if (newProject.task_completed === 0) {
            newProject.task_completed = false;
        } else {
            newProject.task_completed = true;
        }
        return newProject;
    })
    
    }


module.exports = {
    getTasks,
    postTask,
}