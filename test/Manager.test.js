const Manager = require('../lib/Manager');

describe("officeNumber", () => {
    it("Will return an integer", () => {
        const t = 1;
        const m = new Manager('Sarah', 100, 'sdemercurioMI@gmail.com', t);
        expect(m.officeNumber).toEqual(t);
    });

    describe("getOfficeNumber", () => {
        it("Will return an intenger for the office number", () => {
            const t = 1;
            const m = new Manager('Sarah', 100, 'sdemercurioMI@gmail.com', t);
            expect(m.getOfficeNumber()).toEqual(t);
        })
    })

    describe("getRole", () => {
        it("Will override base class and return a string equal to Manager", () => {
            const t = "Manager";
            const m = new Manager(t, 'Sarah', 100, 'sdemercurioMI@gmail.com', 1);
            expect(m.getRole()).toEqual(t);
        });
    });
});
