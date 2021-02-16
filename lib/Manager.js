const Employee = require('../lib/Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
        if(this.name === undefined || this.id === undefined || this.email === undefined || this.officeNumber === undefined) {
            throw new Error("Expected parameters must be valid arguments");
        }
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        return "Manager";
    }
}

module.exports = Manager;