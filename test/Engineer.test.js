const Engineer = require('../lib/Engineer');

describe("gitHub", () => {
    describe("Initialization", () => {
        it("Should create an object of name, id, and email if provided a valid argument", () => {
            const e = new Engineer('Sarah', 100, 'sdemercurioMI@gmail.com');
    
            expect(e.name).toEqual("Sarah");
            expect(e.id).toEqual(100);
            expect(e.email).toEqual("sdemercurioMI@gmail.com");
        });
    it("Will return a string", () => {
        const gh = "sdemercurio";
        const e = new Engineer('Sarah', 100, 'sdemercurioMI@gmail.com', gh);
        expect(e.gitHub).toEqual(gh);
    });

    describe("getGitHub", () => {
        it("Will return a string equal to the value of gitHub account", () => {
            const gh = "sdemercurio";
            const e = new Engineer('Sarah', 100, 'sdemercurioMI@gmail.com', gh);
            expect(e.getGitHub()).toEqual(gh);
        });
    });

    describe("getRole", () => {
        it("Will override base class and return a string equal to Engineer", () => {
            const t = "Engineer";
            const e = new Engineer(t, 'Sarah', 100, 'sdemercurioMI@gmail.com', 'sdemercurio');
            expect(e.getRole()).toEqual(t);
        });
    });
});
});