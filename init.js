// consider when: in question object and call function to repeat questions when new employee is added.
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const renderHTML = require('./lib/renderHTML');
const fs = require('fs');
let file = 'render.html';

const managers = [];
const engineers = [];
const interns = [];

// questions for parent class, inherited by the child classes

// TODO combine inquirer validate key with REGEX to avoid invalid entries

const init = () => {
    inquirer.prompt([{
        type: "input",
        name: "name",
        message: "Please enter employee name",
    },
    {
        type: "input",
        name: "id",
        message: "Please enter employee ID",
    },
    {
        type: "input",
        name: "email",
        message: "Please enter employee email address",
        validate: function (email)
        {
        return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email);
        }
    },
    {
        type: "list",
        name: "role",
        message: "Please select employee role",
        choices:
            [
                "Manager",
                "Engineer",
                "Intern",
            ]
    }])

        // incorporating questions for child classes

        .then(eRole => {
            if (eRole.role === 'Manager') {
                inquirer.prompt([{
                    type: "input",
                    name: "officeNumber",
                    message: "Please enter employee's office number",
                }])
                    .then(er => {
                        const newManager = new Manager(eRole.name, eRole.id, eRole.email, eRole.role, er.officeNumber)
                        managers.push(newManager);
                        addAnother()
                    })
            } else if (eRole.role === 'Engineer') {
                inquirer.prompt([{
                    type: "input",
                    name: "gitHub",
                    message: "Please enter GitHub username",
                }])
                    .then(er => {
                        const newEngineer = new Engineer(eRole.name, eRole.id, eRole.email, eRole.role, er.gitHub)
                        engineers.push(newEngineer);
                        addAnother()
                    })
            } else if (eRole.role === 'Intern') {
                inquirer.prompt([{
                    type: "input",
                    name: "school",
                    message: "Please enter attended school",
                }])
                    .then(er => {
                        const newIntern = new Intern(eRole.name, eRole.id, eRole.email, eRole.role, er.school)
                        interns.push(newIntern);
                        addAnother()
                    })
            }

            // addAnother() will allow the user to add more employees if they so choose
            function addAnother() {
                inquirer.prompt([{
                    type: "confirm",
                    name: "more",
                    message: "Would you like to add another employee?"
                }])
                    .then(response => {
                        if (response.more === true) {
                            init(managers, engineers, interns)
                        }else{ (response.more === false)
                            console.log(managers, engineers, interns);
                            writeHTML(); 
                        }
                    })
            }
        })
}

init();

const writeHTML = () => {
    fs.writeFile(file, renderHTML(managers, engineers, interns) , (err) =>
    err ? console.log(err) : console.log('Success!'))
}
