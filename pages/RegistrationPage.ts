import { Page } from 'playwright';

export class RegistrationPage {
  constructor(private page: Page) {}

  async navigate() {
    await this.page.goto('https://app2.artia.com/users/registration');
  }

  async selectPortugueseLanguage() {
    await this.page.click('[data-test-id="language-selector"]');
    await this.page.click('[data-test-id="pt-button"]');
  }

  async selectEnglishLanguage() {
    await this.page.click('[data-test-id="language-selector"]');
    await this.page.click('[data-test-id="en-button"]');
  }

  async selectEspanishLanguage() {
    await this.page.click('[data-test-id="language-selector"]');
    await this.page.click('[data-test-id="es-button"]');
  }

  async fillUserName(name: string) {
    await this.page.fill('[data-test-id="userName"]', name);
  }

  async getUserNameValue(): Promise<string> {
    return this.page.inputValue('[data-test-id="userName"]');
  }

  async fillUserPhone(phone: string) {
    await this.page.fill('[data-test-id="userPhone"]', phone);
  }

  async fillUserEmail(email: string) {
    await this.page.fill('#userEmail', email);
  }

  async fillUserPassword(password: string) {
    await this.page.fill('[data-test-id="userPassword"]', password);
  }

  async clickCreateAccount() {
    await this.page.click('[data-test-id="create-account"]');
  }

  async checkUserName(): Promise<boolean> {
    return await this.page.locator('[data-test-id="userName"]').isVisible();
  }

  async checklUserPhone(): Promise<boolean> {
    return await this.page.locator('[data-test-id="userPhone"]').isVisible();
  }

  async checkUserEmail(): Promise<boolean> {
    return await this.page.locator('#userEmail').isVisible();
  }

  async checkUserPassword(): Promise<boolean> {
    return await this.page.locator('[data-test-id="userPassword"]').isVisible();
  }

  async checkCreateButton(): Promise<boolean> {
    return await this.page.locator('[data-test-id="create-account"]').isVisible();
  }

  async checkTermsOfUseVisible(): Promise<boolean> {
    return await this.page.locator('[data-test-id="terms-of-use"]').isVisible();
  }

  async checkPrivacyPolicyVisible(): Promise<boolean> {
    return await this.page.locator('[data-test-id="privacy-policy"]').isVisible();
  } 

  async checkLogin(): Promise<boolean> {
    return await this.page.locator('[data-test-id="navigate-to-/users/login"]').isVisible();
  }

  async checkGoogle(): Promise<boolean> {
    return await this.page.locator('[data-test-id="Google"]').isVisible();
  }

  async checkLinkedIn(): Promise<boolean> {
    return await this.page.locator('[data-test-id="LinkedIn"]').isVisible();
  }
 
}
