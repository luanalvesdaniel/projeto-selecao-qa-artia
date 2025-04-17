import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { page } from '../../../support/hooks';
import { RegistrationPage } from '../../../pages/RegistrationPage';

let registrationPage: RegistrationPage;

Given('que estou na tela de registro - e-mail incorreto', async () => {
  registrationPage = new RegistrationPage(page);
  await registrationPage.navigate();
});

When('eu preencho o campo de nome com {string} - e-mail incorreto', async (nome) => {
  await registrationPage.fillUserName(nome);
});

When('eu preencho o campo de telefone com {string} - e-mail incorreto', async (telefone) => {
  await registrationPage.fillUserPhone(telefone);
});

When('eu preencho o campo de email com um email inválido - e-mail incorreto', async () => {
  await registrationPage.fillUserEmail("user123@gmail.com");
});

When('eu preencho o campo de senha com {string} - e-mail incorreto', async (senha) => {
  await registrationPage.fillUserPassword(senha);
});

When('eu clico no botão de criar conta - e-mail incorreto', async () => {
  await registrationPage.clickCreateAccount();
});

Then('não devo ser redirecionado para a página de boas-vindas - e-mail incorreto', async () => {  
  const currentURL = page.url();
  expect(currentURL).toBe('https://app2.artia.com/users/registration');
});
