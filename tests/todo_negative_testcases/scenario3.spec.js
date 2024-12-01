import { test, expect } from '@playwright/test';
const {todoPage} = require('../../pages/todoPage')
const testdata = JSON.parse(JSON.stringify(require('../../utils/testData.json')));

test.describe('Negative Test Cases for the toDo page', () => 
{
    let todopage;

    test.beforeEach(async ({page}) => {
        todopage = new todoPage(page);
        await todopage.getURL()

    });

    test('To clear the item without check and verify the count', async ({page}) => {

        await  todopage.addTheValue(testdata.value1);
        await page.keyboard.press('Enter');
        await  todopage.addTheValue(testdata.value2);
        await page.keyboard.press('Enter');
        await  todopage.addTheValue(testdata.value3);
        await page.keyboard.press('Enter');

        //to clear the item without checked
        await todopage.closeIcon()

        //verfiy the count
        await  todopage.getTotalItemCount()
            
    });



})
