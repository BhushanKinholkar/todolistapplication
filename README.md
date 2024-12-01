**Todo List Application**
This is a sample to-do list application built using TodoMVC. It demonstrates the implementation of various design patterns and testing methodologies.

**Table of Contents**
1. Installation
2. Usage
3. Testing
4. Design Patterns
5. Test Organization
6. Reporting

**Installation**
To install and run the application locally, follow these steps:
git clone https://github.com/BhushanKinholkar/todolistapplication.git

npm install
npm start

**Usage**
To use the application, open your browser and navigate to https://todomvc.com/examples/react/dist/

**Testing**
How and What is Being Tested
We use Playwright for end-to-end testing to ensure the application behaves as expected.

End-to-End Tests: Test the entire application workflow.

Which Patterns are Used and Why
Page Object Model (POM)

pages
  ├── todopage.js
utils
tests
├── todo_negative_testcases
│   ├── scenario1.spec.js
│   └── scenario2.spec.js
├── todo_positive_testcases
    ├── scenario1.spec.js
    ├── scenario2.spec.js
    

**Reporting**
#To the specific file test
npx playwright test tests/todo_negative_testcases/scenario1.spec.js

#To show the html report
npx playwright show-report

#To run the all testcases
npx playwright test

#To run the negative test cases
npx playwright test tests/todo_negative_testcases/

#To run the positive test cases
npx playwright test tests/todo_positive_testcases/

**To generate a test report**
![image](https://github.com/user-attachments/assets/a92bfc74-0957-49e1-9094-7428f75afded)

