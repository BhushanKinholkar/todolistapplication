import { test, expect } from '@playwright/test';


class todoPage{

    constructor(page){

        this.page = page;
        this.addvalue = page.locator("#todo-input");
        this.getTotolItem = page.locator(".todo-count");
        this.checkitem = page.locator(".todo-list [type*='checkbox']");
        this.completebutton = page.locator("[data-testid='footer-navigation'] li a");
        this.allButton = page.locator("[data-testid='footer-navigation'] li a");
        this.clearButton = page.locator(".clear-completed");
        this.firstrecordview = page.locator(".view");
        this.closeicon = page.locator(".destroy");
        this.text1 = page.locator("[data-testid='todo-item-label']");
        this.containervalue = page.locator("[class='view']");
    }

    async getURL()
    {
        await this.page.goto("https://todomvc.com/examples/react/dist/");

    }

    async addTheValue(testvalue){

        await this.addvalue.fill(testvalue)
    }

    async getTotalItemCount()
    {   
        
        console.log(await this.getTotolItem.textContent());
        const initialvalue = await this.getTotolItem.textContent();
        if(initialvalue.includes("5"))
        {
            expect(initialvalue).toEqual("5 items left!");
        }
        else if (initialvalue.includes("2"))
        {
            expect(initialvalue).toEqual("2 items left!");

        }
        

    }

    async checkTheItem()
    {
        await this.checkitem.nth(0).click();
        await this.checkitem.nth(1).click();
        await this.checkitem.nth(2).click();
    }

    async competeButtonAction()
    {
        await this.completebutton.nth(2).click()
    }

    async allButtonAction()
    {
        await this.completebutton.nth(0).click()
    }

    async clearItemFromList()
    {
        await this.clearButton.click()
    }

    async closeIcon(){
       
        const firstrecordview = this.firstrecordview.nth(0);
        await firstrecordview.hover();
        //expect(this.closeicon).toBeVisible();
        await this.closeicon.nth(0).click();
        //await this.closeicon.nth(1).hover().click();
    }

    async getTextValue()
    {
        const newtext = await this.text1.nth(0).textContent();
        console.log(newtext)
        const newtext2 = await this.text1.nth(1).textContent();
        console.log(newtext2)

        if(newtext === newtext2)
        {
            console.log("Duplicate entery added")

        }
    }

    async double_ClickItem()
    {   

        //await this.page.dblclick(this.firstrecordview);
        await this.firstrecordview.first().dblclick();

    }

    async cleartheValue()
    {   
        await this.page.waitForTimeout(5000);
        await this.page.keyboard.press('Control+A');
        await this.page.waitForTimeout(5000);
        await this.page.keyboard.press('Backspace');
        await this.page.waitForTimeout(2000);

    }

}
module.exports = {todoPage}