import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { page } from '../../../support/hooks';
import { RegistrationPage } from '../../../pages/RegistrationPage';
import { generateRandomUserName, generateRandomPhone, generateRandomEmail } from '../../../utils/generateRandomData';

let registrationPage: RegistrationPage;

Given('que estou na tela de registro - senha incorreta', async () => {
  registrationPage = new RegistrationPage(page);
  await registrationPage.navigate();
  await page.click('[data-test-id="language-selector"]');
  await page.click('[data-test-id="pt-button"]');
});

When('eu preencho todos os campos corretamente exceto a senha {string}', async (senha) => {
  const randomUserName = generateRandomUserName();
  await registrationPage.fillUserName(randomUserName);

  const randomPhone = generateRandomPhone();
  await registrationPage.fillUserPhone(randomPhone);

  const randomEmail = generateRandomEmail();
  await registrationPage.fillUserEmail(randomEmail);

  await registrationPage.fillUserPassword(senha);

});

When('eu clico no botão de criar conta a senha incompleta', async () => {
  await registrationPage.clickCreateAccount();
});

Then('devo ter a mensagem de senha {string}', async (msg) => {  
  await page.waitForSelector(`text=${msg}`, { timeout: 15000 });
  const messageLocator = page.getByText(msg, { exact: false });
  await expect(messageLocator).toBeVisible({ timeout: 15000 });
});
