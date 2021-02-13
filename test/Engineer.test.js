const Engineer = require('../lib/Engineer');

describe("gitHub", () => {
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