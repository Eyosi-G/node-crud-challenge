const personRepository = (persons) => {
    return {
        getAll: () => {
            return persons;
        },
        getById: (id) => {
            return persons.find(p => p.id === id)
        },
        add: (data) => {
            persons.push(data)
        },
        deleteById: (id) => {
            const i = persons.findIndex(p => p.id === id)
            persons.splice(i, 1)
        },
        updateById: (id, data) => {
            const i = persons.findIndex(p => p.id === id)
            persons[i] = data;
        }
    }
}

module.exports = personRepository;