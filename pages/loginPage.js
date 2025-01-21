class LoginPage
{
    constructor(page){
       this.page=page
       this.username = "#email1"
       this.password = "//input[@placeholder='Enter Password']"
       this.LoginButton = "button[type='submit']"
    }
    async loginToApplication() {
        await this.page.fill(this.username, "aansa6181@gmail.com")
        await this.page.fill(this.password,"Query12@")
        await this.page.click(this.LoginButton, { timeout: 5000 })
        
    }

}
module.exports = LoginPage;
