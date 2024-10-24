const personService = (personRepository) => {
    return {
        getAll: () => {
            return personRepository.getAll();
        },
        getById: (id) => {
            return personRepository.getById(id);
        },
        add: (data) => {
            personRepository.add(data);
        },
        deleteById: (id) => {
            personRepository.deleteById(id)
        },
        updateById: (id, data) => {
            personRepository.updateById(id, data)
        }
    }
}

module.exports = personService;