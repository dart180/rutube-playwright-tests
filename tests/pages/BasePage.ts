import { Page } from '@playwright/test';

export class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }
  async closeCookiesAlert() {
    const cookiesAlert = this.page.getByLabel('Уведомление об использовании').locator('button');
    if (await cookiesAlert.isVisible()) {
      await cookiesAlert.click();
    }
  }

  async closeModalWindowRegistration() {
    const closeButton = this.page.getByRole('button', { name: 'Закрыть' });
    if (await closeButton.isVisible()) {
      await closeButton.click();
    }
  }

  async closeModalPopupNotification() {
    const popup = this.page.locator('.push-notification-popup-module__wrapper-button');
    if (await popup.isVisible()) {
      await this.page.getByRole('button', { name: 'Не надо' });
    }
  }

  // async closeCookiesAlert() {
  //   await this.page.getByLabel('Уведомление об использовании').locator('button').click();
  // }
  // async closeModalWindowRegistration() {
  //   await this.page.getByRole('button', { name: 'Закрыть' }).click();
  // }
}
