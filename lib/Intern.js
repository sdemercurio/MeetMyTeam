const Employee = require('../lib/Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
        if(this.name === undefined || this.id === undefined || this.email === undefined) {
            throw new Error("Expected parameters must be valid arguments");
        }
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return "Intern";
    }
}

module.exports = Intern;