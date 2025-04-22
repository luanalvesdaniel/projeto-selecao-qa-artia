import { Given, When, Then } from '@cucumber/cucumber';
import { page } from '../../support/hooks';
import { RegistrationPage } from '../../pages/RegistrationPage';
import { generateRandomEmail } from '../../utils/generateRandomData';
import { expect } from 'playwright/test';

let registrationPage: RegistrationPage;
let randomEmail: string;

Given('que estou na tela de registro - cadastro válido', async () => {
  registrationPage = new RegistrationPage(page);
  await registrationPage.navigate();
});

When('eu preencho o campo de nome com {string} - cadastro válido', async (nome) => {
  await registrationPage.fillUserName(nome);
});

When('eu preencho o campo de telefone com {string} - cadastro válido', async (telefone) => {
  await registrationPage.fillUserPhone(telefone);
});

When('eu preencho o campo de email com um email aleatório válido - cadastro válido', async () => {
  randomEmail = generateRandomEmail();
  await registrationPage.fillUserEmail(randomEmail);
});

When('eu preencho o campo de senha com {string} - cadastro válido', async (senha) => {
  await registrationPage.fillUserPassword(senha);
});

When('eu clico no botão de criar conta - cadastro válido', async () => {
  await registrationPage.clickCreateAccount();
});

Then('devo ser redirecionado para a página de boas-vindas - cadastro válido', async () => {
  await page.waitForURL('**/welcome', { timeout: 10000 });
  const currentURL = page.url();
  expect(currentURL).toBe('https://app2.artia.com/welcome');
});
