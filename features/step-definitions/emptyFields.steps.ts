import { Given, When, Then } from '@cucumber/cucumber';
import { page } from '../../support/hooks';
import { RegistrationPage } from '../../pages/RegistrationPage';
import { generateRandomEmail } from '../../utils/generateRandomData';
import { expect } from 'playwright/test';

let registrationPage: RegistrationPage;
let randomEmail: string;

Given('que estou na tela de registro - campos vazios', async () => {
  registrationPage = new RegistrationPage(page);
  await registrationPage.navigate();
});

When('eu preencho o campo de nome com {string} - campos vazios', async (nome) => {
  await registrationPage.fillUserName(nome);
});

When('eu preencho o campo de telefone com {string} - campos vazios', async (telefone) => {
  await registrationPage.fillUserPhone(telefone);
});

When('eu preencho o campo de email vazio - campos vazios', async () => {
  await registrationPage.fillUserEmail("");
});

When('eu preencho o campo de senha com {string} - campos vazios', async (senha) => {
  await registrationPage.fillUserPassword(senha);
});

When('eu clico no botão de criar conta - campos vazios', async () => {
  await registrationPage.clickCreateAccount();
});

Then('não devo ser redirecionado para a página de boas-vindas - campos vazios', async () => {
  const currentURL = page.url();
  expect(currentURL).toBe('https://app2.artia.com/users/registration');
});
