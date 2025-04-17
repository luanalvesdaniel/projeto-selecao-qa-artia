import { Given, When, Then } from '@cucumber/cucumber';
import { page } from '../../support/hooks';
import { RegistrationPage } from '../../pages/RegistrationPage';

let registrationPage: RegistrationPage;

Given('que estou na tela de registro - validar elementos', async () => {
  registrationPage = new RegistrationPage(page);
  await registrationPage.navigate();
});

When('eu verifico o campo Nome - validar elementos', async () => {
  await registrationPage.checkUserName();
});

When('eu verifico o campo Telefone - validar elementos', async () => {
  await registrationPage.checklUserPhone();
});

When('eu verifico o campo E-mail - validar elementos', async () => {
  await registrationPage.checkUserEmail();
});

When('eu verifico o campo Senha - validar elementos', async () => {
  await registrationPage.checkUserPassword();
});

When('eu verifico botão Criar Conta - validar elementos', async () => {
  await registrationPage.checkCreateButton();
});

When('eu verifico botão Google - validar elementos', async () => {
  await registrationPage.checkGoogle();
});

When('eu verifico botão LinkedIn - validar elementos', async () => {
  await registrationPage.checkLinkedIn();
});

When('eu verifico Termos de Uso - validar elementos', async () => {
  await registrationPage.checkTermsOfUseVisible();
});

When('eu verifico Política de Privacidade - validar elementos', async () => {
  await registrationPage.checkPrivacyPolicyVisible();
});

When('eu verifico Você pode fazer login! - validar elementos', async () => {
  await registrationPage.checkLogin();
});
