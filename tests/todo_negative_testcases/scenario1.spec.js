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

    test('To check that empty item should not be added', async ({page}) => {

        await  todopage.addTheValue(testdata.empty);
        await page.keyboard.press('Enter');
        
    });


})
