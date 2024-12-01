
## Installation

To install and run the application locally, follow these steps:
git clone
https://github.com/BhushanKinholkar/todolistapplication.git

```bash
  git clone
  npm install 
```
    
## Documentation

To use the application, open your browser and navigate to url and verified the end to end positive and negative scenario on this application.

https://todomvc.com/examples/react/dist/

## End-to-End testing framework
we used playwright automation testing framework for end to end scenario developement. In here, used the page object model framework for developement the roubust framework.

## Structure

├───node_modules   
├───pages\
├───test-results\
├───tests\
│   ├───todo_negative_testcases\
└───todo_positive_testcases\
└───utils







## Running Tests

To run tests, run the following command

```bash
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
```


## Screenshots

![App Screenshot](https://github.com/user-attachments/assets/a92bfc74-0957-49e1-9094-7428f75afded)



