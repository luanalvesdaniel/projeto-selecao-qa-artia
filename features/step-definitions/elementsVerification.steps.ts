import { Given, When, Then } from '@cucumber/cucumber';
import { page } from '../../support/hooks';
import { RegistrationPage } from '../../pages/RegistrationPage';

let registrationPage: RegistrationPage;

Given('elementsVerification: que estou na tela de registro', async () => {
  registrationPage = new RegistrationPage(page);
  await registrationPage.navigate();
});

When('elementsVerification: eu verifico o campo Nome', async () => {
  await registrationPage.checkUserName();
});

When('elementsVerification: eu verifico o campo Telefone', async () => {
  await registrationPage.checklUserPhone();
});

When('elementsVerification: eu verifico o campo E-mail', async () => {
  await registrationPage.checkUserEmail();
});

When('elementsVerification: eu verifico o campo Senha', async () => {
  await registrationPage.checkUserPassword();
});

When('elementsVerification: eu verifico botão Criar Conta', async () => {
  await registrationPage.checkCreateButton();
});

When('elementsVerification: eu verifico botão Google', async () => {
  await registrationPage.checkGoogle();
});

When('elementsVerification: eu verifico botão LinkedIn', async () => {
  await registrationPage.checkLinkedIn();
});

When('elementsVerification: eu verifico Termos de Uso', async () => {
  await registrationPage.checkTermsOfUseVisible();
});

When('elementsVerification: eu verifico Política de Privacidade', async () => {
  await registrationPage.checkPrivacyPolicyVisible();
});

When('elementsVerification: eu verifico Você pode fazer login!', async () => {
  await registrationPage.checkLogin();
});
