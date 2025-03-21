// await page.locator("p[class^='oxd-userdropdown-name']").hover()
// await page.locator("p[class^='oxd-userdropdown-name']").click();

// await page.locator("//a[.='Logout']").click();
class Logouting{
    constructor(page){
        this.page= page;
        this.dropdown= "p[class^='oxd-userdropdown-name']";
        this.button = "//a[.='Logout']"
    }
    async logout() {
        await this.page.hover(this.dropdown);
        await this.page.click(this.dropdown);
        await this.page.click(this.button);

    }
}

module.exports = Logouting;