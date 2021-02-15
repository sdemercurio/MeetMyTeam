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
