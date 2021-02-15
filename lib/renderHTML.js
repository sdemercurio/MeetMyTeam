// reference Victor builder pattern example
const fs = require('fs');

function renderHTML() {
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.0/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css">
    <link rel="stylesheet" href="../dist/style.css">
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
            <div class="col-md-4"></div>
            <div class="col-md-4" id="wrapper">
                <h3 id="employee-header">Employee Name: ${name}</h3>
                <h4 id="employee-title">Employee Title: ${role}</h4>
                <p id="email">Employee Email: ${email}</p>
                <p id="officeNumber">Office NUmber: ${officeNumber}</p>
            </div>
            <div class="col-md-4"></div>
        </div>
    </div>
    

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.slim.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.1/umd/popper.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.0/js/bootstrap.min.js"></script>
    <script src="../index.js" type="text/javascript"></script>
</body>
</html>`
}

module.exports = renderHTML;