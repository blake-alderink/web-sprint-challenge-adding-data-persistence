// build your `Resource` model here
// build your `Project` model here

const db = require('../../data/dbConfig')

async function getResources() {
const resources = await db('resources');

return resources;
}

function postResource(resource) {
return db('resources').insert(resource)
.then(([id]) => {
return db('resources').where('resource_id', id).first()
})

}


module.exports = {
    getResources,
    postResource,
}