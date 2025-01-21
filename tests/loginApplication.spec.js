const {test, expect} = require("@playwright/test")
const loginPage= require("../pages/loginPage")
const LogoutPage= require("../pages/homePage")
test("Login To Application USing Pom", async ({page})=>{
    await page.goto("https://freelance-learn-automation.vercel.app/login")
  const LoginPage=   new loginPage(page)

await LoginPage.loginToApplication()

const homePage = new LogoutPage (page)
await homePage.verifyCartButton();
await homePage.Logout();
})