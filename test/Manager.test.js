const Manager = require('../lib/Manager');

describe("officeNumber", () => {
    describe("Initialization", () => {
        it("Should create an object of name, id, email, and office number if provided a valid argument", () => {
            const m = new Manager('Sarah', 100, 'sdemercurioMI@gmail.com', 5);

            expect(m.name).toEqual("Sarah");
            expect(m.id).toEqual(100);
            expect(m.email).toEqual("sdemercurioMI@gmail.com");
            
        });
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
});
