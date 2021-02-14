const Employee = require('../lib/Employee');

class Engineer extends Employee {
    constructor(name, id, email, gitHub) {
        super(name, id, email);
        this.gitHub = gitHub;
        if(this.name === undefined || this.id === undefined || this.email === undefined) {
            throw new Error("Expected parameters must be valid arguments");
        }
    }

    getGitHub() {
        return this.gitHub;
    }

    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;