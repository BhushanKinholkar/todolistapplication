import { test, expect } from '@playwright/test';
const {todoPage} = require('../../pages/todoPage')
const testdata = JSON.parse(JSON.stringify(require('../../utils/testData.json')));

test.describe('Test Cases for the toDo page', () => 
{
    let todopage;

    test.beforeEach(async ({page}) => {
        todopage = new todoPage(page);
        await todopage.getURL()

    });

    test('To check that select the item todo list and clear from the todo list', async ({page}) => {

        await  todopage.addTheValue(testdata.value1);
        await page.keyboard.press('Enter');
        await  todopage.addTheValue(testdata.value2);
        await page.keyboard.press('Enter');
        await  todopage.addTheValue(testdata.value3);
        await page.keyboard.press('Enter');
        await  todopage.addTheValue(testdata.value4);
        await page.keyboard.press('Enter');
        await  todopage.addTheValue(testdata.value5);
        await page.keyboard.press('Enter');
        await todopage.checkTheItem();
        await todopage.clearItemFromList();
              
    });


})
