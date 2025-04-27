import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { page } from '../../../support/hooks';
import { RegistrationPage } from '../../../pages/RegistrationPage';
import { generateRandomUserName, generateRandomPhone, generateRandomEmailNotCorporate } from '../../../utils/generateRandomData';

let registrationPage: RegistrationPage;

Given('que estou na tela de registro - e-mail não corporativo', async () => {
  registrationPage = new RegistrationPage(page);
  await registrationPage.navigate();
  await page.click('[data-test-id="language-selector"]');
  await page.click('[data-test-id="pt-button"]');
});

When('eu preencho todos os campos corretamente exceto o e-mail', async () => {
  const randomUserName = generateRandomUserName();
  await registrationPage.fillUserName(randomUserName);

  const randomPhone = generateRandomPhone();
  await registrationPage.fillUserPhone(randomPhone);

  const randomEmail = generateRandomEmailNotCorporate();
  await registrationPage.fillUserEmail(randomEmail);
});

Then('devo ter a mensagem de e-mail {string}', async (msg) => {  
  await page.waitForSelector(`text=${msg}`, { timeout: 15000 });
  const messageLocator = page.getByText(msg, { exact: false });
  await expect(messageLocator).toBeVisible({ timeout: 15000 });
});
