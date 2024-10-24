const express = require('express')
const personHandler = require('./src/person-handler')
const personRepository = require('./src/person-repository')
const personService = require('./src/person-service')
const app = express()

let persons = [{
    id: '1',
    name: 'Sam',
    age: '26',
    hobbies: []
}] //This is your in memory database
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next()
})
app.use(express.json())
app.set('db', persons)
//TODO: Implement crud of person
const handler = personHandler(personService(personRepository(app.get("db"))))
app.get("/person", handler.getPersons)
app.get("/person/:personId", handler.getPerson)
app.post("/person", handler.addPerson)
app.put("/person/:personId", handler.updatePerson)
app.delete("/person/:personId", handler.deletePerson)


app.use((req, res, next) => {
    const error = `${req.url} is not found.`
    res.status(404).json({ error });
});
app.use((err, req, res, next) => {
    res.status(500).json({ error: 'Internal Server Error' });
});

if (require.main === module) {
    app.listen(3000)
}
module.exports = app;