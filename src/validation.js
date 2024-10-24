const validatePerson = (data) => {
    const fields = ["name", "age", "hobbies"]
    const errors = []
    if (!data) {
        errors.push('body is required')
        return errors
    }

    const keys = Object.keys(data)
    if (!keys.length) {
        errors.push('body is required')
    }

    for (let field of fields) {
        if (!keys.includes(field)) {
            errors.push(`${field} is required`);
        } else {
            const value = data[field];
            if (field === "name") {
                if (!value || value.trim() === "") {
                    errors.push(`${field} is required`);
                }
            }

            if (field === "age") {
                if(typeof value !== "number"){
                    errors.push(`${field} needs to be a number`)
                }
            }

            if (field == "hobbies") {
                if (!Array.isArray(value)) {
                    errors.push(`${field} is required`);
                }
            }
        }
    }


    return errors;
}

module.exports.validatePerson = validatePerson;