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

    test('To double click on the name it should be editable', async ({page}) => {

        await  todopage.addTheValue(testdata.value1);
        await page.keyboard.press('Enter');
        await  todopage.addTheValue(testdata.value2);
        await page.keyboard.press('Enter');

        await todopage.double_ClickItem();
        
        await  todopage.cleartheValue();
        await  page.waitForTimeout(5000);
        await page.keyboard.press('Enter');
              
    });



})
