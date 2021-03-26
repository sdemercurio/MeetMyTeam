const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name,id,email,officeNumber){
        if (!officeNumber || isNaN(officeNumber)) {
            throw new Error("You are missing an Office Number!");
          };
        super(name,id,email);
        this.officeNumber = officeNumber;
    }
    getOfficeNumber() {
            console.log(this.officeNumber)
            return this.officeNumber;
        };
    getRole() {
        this.role = "Manager";
        return this.role;
    }
};

module.exports = Manager;