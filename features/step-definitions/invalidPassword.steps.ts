import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { page } from '../../support/hooks';
import { RegistrationPage } from '../../pages/RegistrationPage';
import { generateRandomEmail } from '../../utils/generateEmail';

let registrationPage: RegistrationPage;
let randomEmail: string;

Given('invalidPassword: que estou na tela de registro', async () => {
  registrationPage = new RegistrationPage(page);
  await registrationPage.navigate();
});

When('invalidPassword: eu preencho o campo de nome com {string}', async (nome) => {
  await registrationPage.fillUserName(nome);
});

When('invalidPassword: eu preencho o campo de telefone com {string}', async (telefone) => {
  await registrationPage.fillUserPhone(telefone);
});

When('invalidPassword: eu preencho o campo de email com um email aleatório válido', async () => {
  randomEmail = generateRandomEmail();
  await registrationPage.fillUserEmail(randomEmail);
});

When('invalidPassword: eu preencho o campo de senha com {string}', async (senha) => {
  await registrationPage.fillUserPassword(senha);
});

When('invalidPassword: eu clico no botão de criar conta', async () => {
  await registrationPage.clickCreateAccount();
});

Then('invalidPassword: não devo ser redirecionado para a página de boas-vindas', async () => {  
  const currentURL = page.url();
  expect(currentURL).toBe('https://app2.artia.com/users/registration');
});
