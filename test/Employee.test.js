const Employee = require('../lib/Employee');

describe("Employee", () => {
        it("Will instantiate an instance of Employee barring valid arguments", () => {
            const emp = new Employee('Sarah', 100, 'sdemercurioMI@gmail.com');
            // expect(emp).toBe("object");
            expect(emp.name).toEqual('Sarah');
            expect(emp.id).toEqual(100);
            expect(emp.email).toEqual('sdemercurioMI@gmail.com');
    });
});



