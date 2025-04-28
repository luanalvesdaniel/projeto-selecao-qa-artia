import { Given, When, Then } from '@cucumber/cucumber';
import { page } from '../../../support/hooks';
import { expect } from 'playwright/test';

Given('que estou na tela de registro validando em Português', async () => {
  await page.goto('https://app2.artia.com/users/registration');
});

When('eu escolho o idioma Português', async () => {
  await page.click('[data-test-id="language-selector"]');
  await page.click('[data-test-id="pt-button"]');
});

Then('confirmo as informações em Português', async () => {
  expect(await page.textContent('label[for="userName"]')).toContain('Nome');
  expect(await page.getAttribute('input[data-test-id="userName"]', 'placeholder')).toBe('Informe seu nome');

  expect(await page.textContent('label[for="userPhone"]')).toContain('Telefone');
  expect(await page.getAttribute('input[data-test-id="userPhone"]', 'placeholder')).toBe('Informe seu telefone');

  expect(await page.textContent('label[for="userEmail"]')).toContain('E-mail');
  expect(await page.getAttribute('input#userEmail', 'placeholder')).toBe('Informe seu email');

  expect(await page.textContent('label[for="userPassword"]')).toContain('Senha');
  expect(await page.getAttribute('input[data-test-id="userPassword"]', 'placeholder')).toBe('Informe sua senha');

  expect(await page.textContent('button[data-test-id="create-account"]')).toContain('Criar conta');
});

Given('que estou na tela de registro validando em Inglês', async () => {
  await page.goto('https://app2.artia.com/users/registration');
});

When('eu escolho o idioma Inglês', async () => {
  await page.click('[data-test-id="language-selector"]');
  await page.click('[data-test-id="en-button"]');
});

Then('confirmo as informações em Inglês', async () => {
  expect(await page.textContent('label[for="userName"]')).toContain('Name');
  expect(await page.getAttribute('input[data-test-id="userName"]', 'placeholder')).toBe('Inform your name');

  expect(await page.textContent('label[for="userPhone"]')).toContain('Phone');
  expect(await page.getAttribute('input[data-test-id="userPhone"]', 'placeholder')).toBe('Inform your phone');

  expect(await page.textContent('label[for="userEmail"]')).toContain('E-mail');
  expect(await page.getAttribute('input#userEmail', 'placeholder')).toBe('Inform your email');

  expect(await page.textContent('label[for="userPassword"]')).toContain('Password');
  expect(await page.getAttribute('input[data-test-id="userPassword"]', 'placeholder')).toBe('Inform your password');

  expect(await page.textContent('button[data-test-id="create-account"]')).toContain('Create an account');
});

Given('que estou na tela de registro validando em Espanhol', async () => {
  await page.goto('https://app2.artia.com/users/registration');
});

When('eu escolho o idioma Espanhol', async () => {
  await page.click('[data-test-id="language-selector"]');
  await page.waitForTimeout(1000);
  await page.click('[data-test-id="es-button"]');
});

Then('confirmo as informações em Espanhol', async () => {
  await page.waitForTimeout(1000);
  expect(await page.textContent('label[for="userName"]')).toContain('Nombre');
  expect(await page.getAttribute('input[data-test-id="userName"]', 'placeholder')).toBe('Informar a su nombre');

  expect(await page.textContent('label[for="userPhone"]')).toContain('Teléfono');
  expect(await page.getAttribute('input[data-test-id="userPhone"]', 'placeholder')).toBe('Informar a su teléfono');

  expect(await page.textContent('label[for="userEmail"]')).toContain('E-mail');
  expect(await page.getAttribute('input#userEmail', 'placeholder')).toBe('Informar a su e-mail');

  expect(await page.textContent('label[for="userPassword"]')).toContain('Contraseña');
  expect(await page.getAttribute('input[data-test-id="userPassword"]', 'placeholder')).toBe('Informar a su contraseña');

  expect(await page.textContent('button[data-test-id="create-account"]')).toContain('Crea una cuenta');
});