const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const fs = require('fs');


function renderManagers(managers) {
    let mDiv = '';
    if (managers.length > 0) {
        managers.forEach(e => {
            mDiv = mDiv.concat(`
            <div class="col-md-3" id="wrapper">
            <h3 id="employee-name">${e.getName()}</h3>
            <h4 id="employee-role">${e.getRole()}</h4>
            <p id="id">Employee Id: ${e.getId()}</p>
            <p id="email">Email: <a href="mailto:${e.getEmail()}">${e.getEmail()}</a></p>
            <p id="override">Office Number: ${e.getOfficeNumber()}</p>
                </div>
            `)
        });
        return mDiv
    }
}

function renderEngineers(engineers) {
    let mDiv = '';
    if (engineers.length > 0) {
        engineers.forEach(e => {
            mDiv = mDiv.concat(`
            <div class="col-md-3" id="wrapper">
            <h3 id="employee-name">${e.getName()}</h3>
            <h4 id="employee-role">${e.getRole()}</h4>
            <p id="id">Employee Id: ${e.getId()}</p>
            <p id="email">Email: <a href="mailto:${e.getEmail()}">${e.getEmail()}</a></p>
            <p id="override">GitHub: <a href="${e.getGitHub()}" target="_blank">${e.gitHub}</a></p>
                </div>
            `)
        });
        return mDiv
    }
}


function renderInterns(interns) {
    let mDiv = '';
    if (interns.length > 0) {
        interns.forEach(e => {
            mDiv = mDiv.concat(`
            <div class="col-md-3" id="wrapper">
            <h3 id="employee-name">${e.getName()}</h3>
            <h4 id="employee-role">${e.getRole()}</h4>
            <p id="id">Employee Id: ${e.getId()}</p>
            <p id="email">Email: <a href="mailto:${e.getEmail()}">${e.getEmail()}</a></p>
            <p id="override">School: ${e.getSchool()}</p>
                </div>
            `)
        });
        return mDiv
    }
}

function renderHTML(managers, engineers, interns) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.0/css/bootstrap.min.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css">
        <link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Spartan:wght@900&display=swap" rel="stylesheet">
<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@700&family=Spartan:wght@700;900&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="./dist/style.css">
        <title>Meet My Team</title>
    </head>
    <body>
        <header>
            <div class="row">
                <h1 id="header">Meet My Team</h1>
            </div>
        </header>
        <div class="container">
            <div class="row">
                ${renderManagers(managers)}
                ${renderEngineers(engineers)}
                ${renderInterns(interns)}

            </div>
        </div>
        
    
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.slim.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.1/umd/popper.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.0/js/bootstrap.min.js"></script>
        <script src="./init.js" type="text/javascript"></script>
    </body>
    </html
`
}

module.exports = renderHTML;