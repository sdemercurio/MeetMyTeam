## Work in progress
See issues

## Description

Your task is to build a Node.js command-line application that takes in information about employees on a software engineering team, then generates an HTML webpage that displays summaries for each person. Testing is key to making code maintainable, so you’ll also write a unit test for every part of your code and ensure that it passes each test.

Because this application won’t be deployed, you’ll need to provide a link to a walkthrough video that demonstrates its functionality and all of the tests passing. You’ll need to submit a link to the video AND add it to the readme of your project.

# company_profile_CLI
OOP: Team profile generator

## Classes:
The application includes ```Employee```, ```Manager```, ```Engineer```, and ```Intern``` classes. The latter three child classes extend from the parent class ```Employee```. These child classes will inheret the properties ```name```, ```id```, and ```email```, along with their methods.

![UML_diagram](assets/imgs/company_profile_CLI.jpeg)

```javascript
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        if(this.name === undefined || this.id === undefined || this.email === undefined) {
            throw new Error("Expected parameters must be valid arguments");
        };
    };
```
Each child class possesses their own unique property and method in conjunction with those inherited from the parent class using the ```super``` function.

```javascript
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
        if(this.name === undefined || this.id === undefined || this.email === undefined) {
            throw new Error("Expected parameters must be valid arguments");
        };
    };

```
## Testing
Unit tests are written for each class, ensuring each test passes. The initial tests are designed to fail at first until the most simple code is written to get the tests to pass. 

![UML_diagram](assets/imgs/passed_tests.PNG)

Once initial tests have passed, code will then be refactored to deliver a solid, functioning app.

