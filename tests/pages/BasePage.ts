import { Page } from '@playwright/test';

export class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async closeCookiesAlert() {
    await this.page.getByLabel('Уведомление об использовании').locator('button').click();
  }
  async closeModalWindowRegistration() {
    await this.page
      .locator('.wdp-popup-module__header')
      .getByRole('button', { name: 'Закрыть' })
      .click();
  }
}
