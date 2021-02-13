const Employee = require('../lib/Employee');

describe("Employee", () => {
    it("Will instantiate an instance of Employee barring valid arguments", () => {
        const e = new Employee('Sarah', 100, 'sdemercurioMI@gmail.com');
        // expect(e).toBe("object");
        expect(e.name).toBe('Sarah');
        expect(e.id).toBe(100);
        expect(e.email).toBe('sdemercurioMI@gmail.com');
    });

    describe("getName", () => {
        it("Will return a string equal to name", () => {
            const t = 'Sarah';
            const e = new Employee(t, 100, 'sdemercurioMI@gmail.com');
            expect(e.name).toEqual(t);
        });
    });

    describe("getId", () => {
        it("Will return an integer equal to id", () => {
            const t = 100;
            const e = new Employee('Sarah', t, 'sdemercurioMI@gmail.com');
            expect(e.getId()).toEqual(t);
        });
    });

    describe("getEmail", () => {
        it("Will return a string equal to email", () => {
            const t = 'sdemercurioMI@gmail.com';
            const e = new Employee('Sarah', 100, t);
            expect(e.getEmail()).toEqual(t);
        });
    });

    describe("getRole", () => {
        it("Will return a string equal to the role chosen", () => {
            const t = 'Employee';
            const e = new Employee('Sarah', 100, 'sdemercurioMI@gmail.com');
            expect(e.getRole()).toEqual(t);
        });
    });
});