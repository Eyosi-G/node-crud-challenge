const { validatePerson } = require("./validation");

const personHandler = (personService) => {
    return {
        getPerson: (req, res) => {
            const id = req.params.personId;
            const person = personService.getById(id)
            if (!person) {
                return res.status(404).end()
            }
            res.status(200).send(person)
        },
        getPersons: (req, res) => {
            const persons = personService.getAll()
            res.status(200).send(persons)
        },
        addPerson: (req, res) => {
            const errors = validatePerson(req.body)
            if (errors.length > 0) {
                return res.status(400).send({ errors })
            }
            const data = {
                ...req.body,
                id: Date.now()
            }
            personService.add(data)
            res.status(200).end()
        },
        updatePerson: (req, res) => {
            const id = req.params.personId
            const errors = validatePerson(req.body)
            if (errors.length > 0) {
                return res.status(400).send({ errors })
            }
            const person = personService.getById(id)
            if (!person) {
                res.status(400).end()
                return
            }

            const data = {
                ...req.body,
                id
            }
            personService.updateById(id, data)
            res.status(200).end()
        },
        deletePerson: (req, res) => {
            const id = req.params.personId
            const person = personService.getById(id)
            if (!person) {
                res.status(400).end()
                return
            }
            console.log("called", id)
            personService.deleteById(id)
            res.status(200).end()
        }
    }
}

module.exports = personHandler;