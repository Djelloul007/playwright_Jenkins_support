const { it, describe,expect  } = require("@playwright/test");
const { LoginPage } = require('./models/loginpage');

describe("this is a test suite", async () => {
	it("test case 1", async ({ page }) => {
        await page.goto('http://the-internet.herokuapp.com/');
        const loginpage = new LoginPage(page);
        await loginpage.login('tomsmith','SuperSecretPassword!')

        const divtext = await page.innerText('div[id="flash"]');
        expect(divtext).toContain(" You logged into a secure area!");  
  	});

  it("test case 2", async ({ page }) => {
    await page.goto('http://the-internet.herokuapp.com/');
    const loginpage = new LoginPage(page);
    await loginpage.login('tomsmith','SuperSecretPassword!')
    
    const poweredbytext = await page.innerText('text=/.*Powered by.*/');
    expect(poweredbytext).toContain("Powered by Elemental Selenium");
  });
  
  it("test case 3", async ({ page }) => {
	await page.goto('http://the-internet.herokuapp.com/');
  const loginpage = new LoginPage(page);
  await loginpage.login('tomsmith','SuperSecretPassword!')
  
    // Click text=/.*Logout.*/
    await page.click('text=/.*Logout.*/');
    expect(await page.url() ).toBe("http://the-internet.herokuapp.com/login");
  });

});