import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { page } from '../../../support/hooks';
import { RegistrationPage } from '../../../pages/RegistrationPage';
import { generateRandomEmail } from '../../../utils/generateEmail';

let registrationPage: RegistrationPage;
let randomEmail: string;

Given('que estou na tela de registro - senha incorreta', async () => {
  registrationPage = new RegistrationPage(page);
  await registrationPage.navigate();
});

When('eu preencho o campo de nome com {string} - senha incorreta', async (nome) => {
  await registrationPage.fillUserName(nome);
});

When('eu preencho o campo de telefone com {string} - senha incorreta', async (telefone) => {
  await registrationPage.fillUserPhone(telefone);
});

When('eu preencho o campo de email com um email aleatório válido - senha incorreta', async () => {
  randomEmail = generateRandomEmail();
  await registrationPage.fillUserEmail(randomEmail);
});

When('eu preencho o campo de senha com {string} - senha incorreta', async (senha) => {
  await registrationPage.fillUserPassword(senha);
});

When('eu clico no botão de criar conta - senha incorreta', async () => {
  await registrationPage.clickCreateAccount();
});

Then('não devo ser redirecionado para a página de boas-vindas - senha incorreta', async () => {  
  const currentURL = page.url();
  expect(currentURL).toBe('https://app2.artia.com/users/registration');
});
