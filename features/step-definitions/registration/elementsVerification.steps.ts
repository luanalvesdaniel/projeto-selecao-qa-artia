import { Given, When, Then } from '@cucumber/cucumber';
import { page } from '../../../support/hooks';
import { RegistrationPage } from '../../../pages/RegistrationPage';

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
