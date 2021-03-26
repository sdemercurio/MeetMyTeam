  const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name,id,email,school){
        if (!school) {
            throw new Error("You are missing a school!");
          };
        super(name,id,email);
        this.school = school;
    }
    getSchool() {
            console.log(this.school)
            return this.school;
        };
    getRole() {
        this.role = "Intern";
        return this.role;
    }
};

module.exports = Intern;