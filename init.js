// consider when: in question object and call function to repeat questions when new employee is added.
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const util = require('util');
const renderHTML = require('./lib/renderHTML'); 

const q = [
    {
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
    },
];

const qManager = [
    {
        type: "input",
        name: "officeNumber",
        message: "Please enter employee's office number",
    },
];

const qEngineer = [
    {
        type: "input",
        name: "gitHub",
        message: "Please enter employee's GitHub username",
    },
];

const qIntern = [
    {
        type: "input",
        name: "School",
        message: "Please enter employee's school",
    },
];

const addEmployee = [
    {
        type: "confirm",
        name: "more",
        message: "Would you like to add another employee?",
    },
];

const init = async () => {
    const manager = [];
    const engineer = [];
    const intern = [];

    let addAnother = true;
    
    while (addAnother) {
        const {name, id, email, role,} = await inquirer.prompt(q);

        if(role === 'Manager') {
            const {officeNumber} = await inquirer.prompt(qManager);
            manager.push(new Manager(name, id, email, officeNumber));

        }else if (role === 'Engineer') {
            const {gitHub} = await inquirer.prompt(qEngineer);
            engineer.push(new Engineer(name, id, email, gitHub));

        }else if (role === 'Intern') {
            const {school} = await inquirer.prompt(qIntern);
            intern.push(new Intern(name, id, email, school));

        }if (addAnother === true) {
            const {more} = await inquirer.prompt(addEmployee);
            addAnother = more;
        }
    }
};

init();