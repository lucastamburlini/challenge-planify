import { test, Page, expect, Browser } from "@playwright/test";

test.describe("challenge-planify", () => {
  const url = "http://localhost:5173";
  let page: Page;

  test.beforeEach(async ({ browser }: { browser: Browser }) => {
    page = await browser.newPage();
    await page.goto(url);
  });

  test("Make a reservation", async () => {
    const buttonList = await page.waitForSelector(
      '//*[@id="root"]/div/div[2]/div/ul[1]/button'
    );
    await buttonList.click();
    const buttonSelectService = await page.waitForSelector(
      '//*[@id="root"]/div/div[2]/div/ul[1]/li[1]/div/button'
    );
    await buttonSelectService.click();
    await page.waitForTimeout(500);
    const buttonNextOne = await page.waitForSelector(
      '//*[@id="root"]/div/div[3]/div/button'
    );
    await buttonNextOne.click();
    expect(page.url()).toBe(`${url}/timeSelection`);

    const buttonSlot = await page.waitForSelector(
      '//*[@id="root"]/div/div[2]/div/button[6]'
    );
    await buttonSlot.click();

    const buttonNextTwo = await page.waitForSelector(
      '//*[@id="root"]/div/div[3]/div/button[2]'
    );
    await buttonNextTwo.click();
    expect(page.url()).toBe(`${url}/confirmReservation`);

    await page.waitForTimeout(500);

    const buttonConfirm = await page.waitForSelector(
      '//*[@id="root"]/div/div[3]/div/button[2]'
    );
    await buttonConfirm.click();

    const buttonConfirmAlert = await page.waitForSelector(
      "button.swal2-confirm.swal2-styled"
    );
    await buttonConfirmAlert.click();
    expect(page.url()).toBe(`${url}/selectedSlotDetails`);

    await page.waitForTimeout(1000);

  });
  
  test.afterAll(async () => {
    await page.close();
  });
});
