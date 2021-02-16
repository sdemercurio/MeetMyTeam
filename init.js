// consider when: in question object and call function to repeat questions when new employee is added.
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const renderHTML = require('./lib/renderHTML');
const fs = require('fs');
let file = 'render.html';

const employees = [];

// questions for parent class, inherited by the child classes

function init() {
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

        // incorparating questions for child classes

        .then(eRole => {
            if (eRole.role === 'Manager') {
                inquirer.prompt([{
                    type: "input",
                    name: "officeNumber",
                    message: "Please enter employee's office number",
                }])
                    .then(er => {
                        const newManager = new Manager(eRole.name, eRole.id, eRole.email, eRole.role, er.officeNumber)
                        employees.push(newManager);
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
                        employees.push(newEngineer);
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
                        employees.push(newIntern);
                        addAnother()
                    })
            }
            function addAnother() {
                inquirer.prompt([{
                    type: "confirm",
                    name: "more",
                    message: "Would you like to add another employee?"
                }])
                    .then(response => {
                        if (response.more === true) {
                            init(employees)
                        } else {
                            console.log('team', employees)
                        }
                    })
            }
        })
}

init();