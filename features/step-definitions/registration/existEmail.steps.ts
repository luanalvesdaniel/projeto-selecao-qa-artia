import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { page } from '../../../support/hooks';
import { generateRandomUserName, generateRandomPhone, generateRandomPassword, generateRandomEmail } from '../../../utils/generateRandomData';
import { RegistrationPage } from '../../../pages/RegistrationPage';

let registrationPage: RegistrationPage;

Given('que estou na tela de registro - e-mail existente', async () => {
  registrationPage = new RegistrationPage(page);
  await registrationPage.navigate();
});

When('eu preencho todos os campos corretamente exceto o e-mail existente {string}', async (email) => {
  const randomUserName = generateRandomUserName();
  await registrationPage.fillUserName(randomUserName);

  const randomPhone = generateRandomPhone();
  await registrationPage.fillUserPhone(randomPhone);

  await registrationPage.fillUserEmail(email);

  const randomPassword = generateRandomPassword();
  await registrationPage.fillUserPassword(randomPassword);

});

When('eu clico no botão de criar conta com o e-mail já existente', async () => {
  await registrationPage.clickCreateAccount();
});

Then('devo ter a mensagem de e-mail existente {string}', async (msg) => {  
  await page.waitForSelector(`text=${msg}`, { timeout: 15000 });
  const messageLocator = page.getByText(msg, { exact: false });
  await expect(messageLocator).toBeVisible({ timeout: 15000 });
});
