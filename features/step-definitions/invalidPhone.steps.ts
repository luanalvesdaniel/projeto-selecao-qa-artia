import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { page } from '../../support/hooks';
import { RegistrationPage } from '../../pages/RegistrationPage';
import { generateRandomEmail } from '../../utils/generateRandomData';

let registrationPage: RegistrationPage;
let randomEmail: string;

Given('que estou na tela de registro - telefone incorreto', async () => {
  registrationPage = new RegistrationPage(page);
  await registrationPage.navigate();
});

When('eu preencho o campo de nome com {string} - telefone incorreto', async (nome) => {
  await registrationPage.fillUserName(nome);
});

When('eu preencho o campo de telefone com {string} - telefone incorreto', async (telefone) => {
  await registrationPage.fillUserPhone(telefone);
});

When('eu preencho o campo de email com um email aleatório válido - telefone incorreto', async () => {
  randomEmail = generateRandomEmail();
  await registrationPage.fillUserEmail(randomEmail);
});

When('eu preencho o campo de senha com {string} - telefone incorreto', async (senha) => {
  await registrationPage.fillUserPassword(senha);
});

When('eu clico no botão de criar conta - telefone incorreto', async () => {
  await registrationPage.clickCreateAccount();
});

Then('não devo ser redirecionado para a página de boas-vindas - telefone incorreto', async () => {  
  const currentURL = page.url();
  expect(currentURL).toBe('https://app2.artia.com/users/registration');
});
