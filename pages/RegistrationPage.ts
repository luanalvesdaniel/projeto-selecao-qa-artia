import { Page } from 'playwright';

export class RegistrationPage {
  constructor(private page: Page) {}

  async navigate() {
    await this.page.goto('https://app2.artia.com/users/registration');
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
  
}
