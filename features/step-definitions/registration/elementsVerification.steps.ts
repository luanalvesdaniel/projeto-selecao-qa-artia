import { Given, When, Then } from '@cucumber/cucumber';
import { page } from '../../../support/hooks';
import { RegistrationPage } from '../../../pages/RegistrationPage';
import { expect } from '@playwright/test';

let registrationPage: RegistrationPage;

Given('que estou na tela de registro - validar elementos', async () => {
  registrationPage = new RegistrationPage(page);
  await registrationPage.navigate();
  await page.click('[data-test-id="language-selector"]');
  await page.click('[data-test-id="pt-button"]');
});

When('eu verifico o campo Nome', async () => {
  await registrationPage.checkUserName();
});

When('eu verifico o campo Telefone', async () => {
  await registrationPage.checklUserPhone();
});

When('eu verifico o campo E-mail', async () => {
  await registrationPage.checkUserEmail();
});

When('eu verifico o campo Senha', async () => {
  await registrationPage.checkUserPassword();
});

When('eu verifico botão Criar Conta', async () => {
  await registrationPage.checkCreateButton();
});

When('eu verifico botão Google', async () => {
  await registrationPage.checkGoogle();
});

When('eu verifico botão LinkedIn', async () => {
  await registrationPage.checkLinkedIn();
});

When('eu verifico Termos de Uso', async () => {
  await registrationPage.checkTermsOfUseVisible();
});

When('eu verifico Política de Privacidade', async () => {
  await registrationPage.checkPrivacyPolicyVisible();
});

When('eu verifico Você pode fazer login!', async () => {
  await registrationPage.checkLogin();
});

// When('eu verifico a frase Vamos começar a transformar seus planos em conquistas?', async () => {
//   const regexes = [
//     /Vamos começar a/i,
//     /transformar/i,
//     /seus planos em/i,
//     /conquistas?/i,
//   ];
//   const bodyText = await page.locator('body').innerText();
//   for (const regex of regexes) {
//     expect(bodyText).toMatch(regex);
//   }
// });
