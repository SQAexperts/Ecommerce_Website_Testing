const {test, expect} = require("@playwright/test")
const loginPage= require("../pages/loginPage")
const Outpunch= require("../pages/homePage")
const Outlog =    require("../pages/Logouting")
test("Login Testing", async ({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
     const LoginPage =  new loginPage(page)
   await  LoginPage.loginToApplication();
    await page.waitForTimeout(5000)

    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
    const outpunch = new Outpunch(page);
    await outpunch.PunchOut(); 



await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
    const outlog = new Outlog(page);
    await outlog.logout();
    await page.waitForTimeout(2000)
    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

 


})