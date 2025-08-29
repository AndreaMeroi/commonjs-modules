function fullNameFn(firstName, lastName) {

    const fullName = {
        firstName: '',
        lastName: ''
    }

    return fullName
}

const NameComplete = fullNameFn('', '')

console.log(NameComplete)

//mjs export//

export { NameComplete }

//commonJs export//

//module.exports = fullNameFn;