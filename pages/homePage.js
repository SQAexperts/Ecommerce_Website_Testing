
const {expect} = require("@playwright/test")
class HomePage{
    constructor(page){
        this.page=page
           this.cartoption = "//button[normalize-space()='Cart']"
        this.menu= "img[alt='menu']"
        this.button= "button[class='nav-menu-item']"
    }
    async verifyCartButton() {
           await expect(this.page.locator(this.cartoption)).toBeVisible
    }

    async Logout() {
        await this.page.click(this.menu)
        await this.page.click(this.button, { timeout: 5000 })
    }





}

module.exports = HomePage;