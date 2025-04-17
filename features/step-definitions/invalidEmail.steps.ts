import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { page } from '../../support/hooks';
import { RegistrationPage } from '../../pages/RegistrationPage';

let registrationPage: RegistrationPage;

Given('invalidEmail: que estou na tela de registro', async () => {
  registrationPage = new RegistrationPage(page);
  await registrationPage.navigate();
});

When('invalidEmail: eu preencho o campo de nome com {string}', async (nome) => {
  await registrationPage.fillUserName(nome);
});

When('invalidEmail: eu preencho o campo de telefone com {string}', async (telefone) => {
  await registrationPage.fillUserPhone(telefone);
});

When('invalidEmail: eu preencho o campo de email com um email inválido', async () => {
  await registrationPage.fillUserEmail("user123@gmail.com");
});

When('invalidEmail: eu preencho o campo de senha com {string}', async (senha) => {
  await registrationPage.fillUserPassword(senha);
});

When('invalidEmail: eu clico no botão de criar conta', async () => {
  await registrationPage.clickCreateAccount();
});

Then('invalidEmail: não devo ser redirecionado para a página de boas-vindas', async () => {  
  const currentURL = page.url();
  expect(currentURL).toBe('https://app2.artia.com/users/registration');
});
