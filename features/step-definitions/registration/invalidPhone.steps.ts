import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { page } from '../../../support/hooks';
import { RegistrationPage } from '../../../pages/RegistrationPage';
import { generateRandomUserName, generateRandomPhone, generateRandomPassword, generateRandomEmail } from '../../../utils/generateRandomData';

let registrationPage: RegistrationPage;

Given('que estou na tela de registro - telefone incorreto', async () => {
  registrationPage = new RegistrationPage(page);
  await registrationPage.navigate();
  await page.click('[data-test-id="language-selector"]');
  await page.click('[data-test-id="pt-button"]');
});

When('eu preencho todos os campos corretamente exceto o telefone {string}', async (telefone) => {
  const randomUserName = generateRandomUserName();
  await registrationPage.fillUserName(randomUserName);

  await registrationPage.fillUserPhone(telefone);

  const randomEmail = generateRandomEmail();
  await registrationPage.fillUserEmail(randomEmail);

  const randomPassword = generateRandomPassword();
  await registrationPage.fillUserPassword(randomPassword);

});

When('eu clico no botão de criar conta com telefone incompleto', async () => {
  await registrationPage.clickCreateAccount();
});

Then('devo ter a mensagem de telefone {string}', async (msg) => {  
  await page.waitForSelector(`text=${msg}`, { timeout: 15000 });
  const messageLocator = page.getByText(msg, { exact: false });
  await expect(messageLocator).toBeVisible({ timeout: 15000 });
});
