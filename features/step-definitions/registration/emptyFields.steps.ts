import { Given, When, Then } from '@cucumber/cucumber';
import { page } from '../../../support/hooks';
import { RegistrationPage } from '../../../pages/RegistrationPage';
import { expect } from 'playwright/test';

let registrationPage: RegistrationPage;

Given('que estou na tela de registro - campos vazios', async () => {
  registrationPage = new RegistrationPage(page);
  await registrationPage.navigate();
});

When('deixo todos o campos vazios', async () => {
  await registrationPage.fillUserName("");
  await registrationPage.fillUserPhone("");
  await registrationPage.fillUserEmail("");
  await registrationPage.fillUserPassword("");
  await registrationPage.clickCreateAccount();
});

Then('devo ter a mensagem de campos vazios {string}', async (msg) => {
  await page.waitForSelector(`text=${msg}`, { timeout: 15000 });
  const messageLocator = page.getByText(msg, { exact: false });
  await expect(messageLocator).toHaveCount(4, { timeout: 15000 });
  for (let i = 0; i < 4; i++) {
    await expect(messageLocator.nth(i)).toBeVisible({ timeout: 15000 });
  }
});
