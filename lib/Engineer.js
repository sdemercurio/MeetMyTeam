const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name,id,email,github){
        if (!github) {
            throw new Error("You are missing a GitHub Username!");
          };
        super(name,id,email);
        this.github = github;
    }
    getGithub() {
            console.log(this.github)
            return this.github;
        };
    getRole() {
        this.role = "Engineer"
        return this.role;
    }
};

module.exports = Engineer