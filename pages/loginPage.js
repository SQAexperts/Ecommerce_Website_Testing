class LoginPage
{
    constructor(page){
       this.page=page
       this.username= "//input[@name='username']";
       this.password = "input[name='password']"
       this.LoginButton = "button[type*='submit']"
    }
    async loginToApplication() {
        await this.page.fill(this.username, "Admin")
        await this.page.fill(this.password,"admin123")
        await this.page.click(this.LoginButton);
        
    }

}
module.exports = LoginPage;
