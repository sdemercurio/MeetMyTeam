const Intern = require('../lib/Intern');

describe("school", () => {
    describe("Initialization", () => {
        it("Should create an object of name, id, and email if provided a valid argument", () => {
            const i = new Intern('Sarah', 100, 'sdemercurioMI@gmail.com');
    
            expect(i.name).toEqual("Sarah");
            expect(i.id).toEqual(100);
            expect(i.email).toEqual("sdemercurioMI@gmail.com");
        });
    it("Will return a string", () => {
        const s = "Wayne State University";
        const i = new Intern('Sarah', 100, 'sdemercurioMI@gmail.com', s);
        expect(i.school).toEqual(s);
    });

    describe("getSchool", () => {
        it("Will return a string equal to the value of user input", () => {
            const s = "Wayne State University";
            const i = new Intern('Sarah', 100, 'sdemercurioMI@gmail.com', s);
            expect(i.getSchool()).toEqual(s);
        });
    });

    describe("getRole", () => {
        it("Will override base class and return a string equal to Intern", () => {
            const r = "Intern";
            const i = new Intern(r,'Sarah', 100, 'sdemercurioMI@gmail.com');
            expect(i.getRole()).toEqual(r);
        });
    });
});
});