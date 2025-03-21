class homePage
{
    constructor(page){
       this.page=page
       this.clock= "i[class='oxd-icon bi-stopwatch']";
       this.dateInput = "input[placeholder='yyyy-dd-mm']";
       this.timeInput = "input[placeholder='hh:mm']";
       this.hourInput = "input[class^='oxd-input oxd-input--active oxd-time-hour-input-text']"
       this.incrementionIcon = "i[role='none']"
       this.description= "textarea[placeholder='Type here']"
       this.submit= "button[type*='submit']";
       this.dashboard = "//span[text()='Dashboard']"
    }
    async PunchOut() {
        await this.page.click(this.clock);
        await this.page.click(this.dateInput);
        await this.page.keyboard.press('Meta+A');
        await this.page.keyboard.press('Backspace');
        await this.page.keyboard.type('2025-28-03');
        await this.page.click(this.timeInput);
        await this.page.click(this.hourInput);
        await this.page.keyboard.press('Meta+A');
        await this.page.keyboard.press('Backspace');
        await this.page.keyboard.type("07");
        const link = this.page.locator(this.incrementionIcon).nth(2);
        for (let i = 0; i < 5; i++) {
            await link.click();
        }
        await this.page.fill(this.description, "MY Punch Out Has Been Completed");
        await this.page.click(this.submit)
        await this.page.click(this.dashboard)
        
    }

}
module.exports = homePage;
