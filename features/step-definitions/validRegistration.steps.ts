import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { page } from '../../support/hooks';
import { RegistrationPage } from '../../pages/RegistrationPage';
import { generateRandomEmail } from '../../utils/generateEmail';

let registrationPage: RegistrationPage;
let randomEmail: string;

Given('que estou na tela de registro', async () => {
  registrationPage = new RegistrationPage(page); // instanciar só aqui, quando page já existe
  await registrationPage.navigate();
});

When('eu preencho o campo de nome com {string}', async (nome) => {
  await registrationPage.fillUserName(nome);
});

When('eu preencho o campo de telefone com {string}', async (telefone) => {
  await registrationPage.fillUserPhone(telefone);
});

When('eu preencho o campo de email com um email aleatório válido', async () => {
  randomEmail = generateRandomEmail();
  await registrationPage.fillUserEmail(randomEmail);
});

When('eu preencho o campo de senha com {string}', async (senha) => {
  await registrationPage.fillUserPassword(senha);
});

When('eu clico no botão de criar conta', async () => {
  await registrationPage.clickCreateAccount();
});

Then('devo ser redirecionado para a página de boas-vindas', async () => {
  await page.waitForURL('**/welcome', { timeout: 10000 });
  const currentURL = page.url();
  expect(currentURL).toBe('https://app2.artia.com/welcome');
});
