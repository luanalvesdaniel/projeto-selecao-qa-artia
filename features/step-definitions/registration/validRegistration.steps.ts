import { Given, When, Then } from '@cucumber/cucumber';
import { page } from '../../../support/hooks';
import { RegistrationPage } from '../../../pages/RegistrationPage';
import { generateRandomUserName, generateRandomPhone, generateRandomPassword, generateRandomEmail } from '../../../utils/generateRandomData';
import { expect } from 'playwright/test';

let registrationPage: RegistrationPage;

Given('que estou na tela de registro - cadastro válido', async () => {
  registrationPage = new RegistrationPage(page);
  await registrationPage.navigate();
  await page.click('[data-test-id="language-selector"]');
  await page.click('[data-test-id="pt-button"]');
});

When('eu preencho todos os campos corretamente', async () => {
  const randomUserName = generateRandomUserName();
  await registrationPage.fillUserName(randomUserName);

  const randomPhone = generateRandomPhone();
  await registrationPage.fillUserPhone(randomPhone);

  const randomEmail = generateRandomEmail();
  await registrationPage.fillUserEmail(randomEmail);

  const randomPassword = generateRandomPassword();
  await registrationPage.fillUserPassword(randomPassword);

});

When('eu clico no botão Criar Conta', async () => {
  await registrationPage.clickCreateAccount();
});

Then('devo ser redirecionado para a página de boas-vindas', async () => {
  await page.waitForURL('**/welcome', { timeout: 10000 });
  const currentURL = page.url();
  expect(currentURL).toBe('https://app2.artia.com/welcome');
});
