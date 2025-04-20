import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class MainPage extends BasePage {
  private readonly headerLocator: Locator;
  private readonly categoriesTabLocator: Locator;
  private readonly menuLocator: Locator;
  private readonly headerAddButtonLocator: Locator;
  private readonly headerNotificationsButtonLocator: Locator;
  private readonly headerLoginButtonLocator: Locator;
  private readonly headerAddButtonPopupListLocator: Locator;
  private readonly headerNotificationsPopupLocator: Locator;
  private readonly authorizationModalLocator: Locator;
  private readonly switchToRegistrationModalButtonLocator: Locator;
  private readonly menuButtonLocator: Locator;
  private readonly openMenuAriaLocator: Locator;
  private readonly changeThemeButtonLocator: Locator;
  private readonly userLogoLocator: Locator;
  private readonly headerUserMenuLocator: Locator;

  constructor(page: Page) {
    super(page);
    this.headerLocator = this.page.getByRole('banner');
    this.categoriesTabLocator = this.page.locator('section').filter({
      hasText:
        /^ГлавнаяРекомендацииФильмыСериалыТелешоуСпортБлогерыНовостиМузыкаПодкастыДетямТВ онлайн$/,
    });
    this.menuLocator = this.page.getByLabel('Облегченная панель навигации');
    this.headerAddButtonLocator = this.page.getByRole('button', { name: 'Добавить' });
    this.headerNotificationsButtonLocator = this.page.getByRole('button', { name: 'Уведомления' });
    this.headerLoginButtonLocator = this.page.getByRole('button', { name: 'Вход и регистрация' });
    this.headerAddButtonPopupListLocator = this.page.locator(
      '.wdp-header-right-module__uploader ul',
    );
    this.headerNotificationsPopupLocator = this.page.locator(
      'wdp-notifications-popup-module__wrapper',
    );
    this.authorizationModalLocator = this.page
      .locator('iframe[title="Multipass"]')
      .contentFrame()
      .locator('div[role="form"]');
    this.switchToRegistrationModalButtonLocator = this.page
      .locator('iframe[title="Multipass"]')
      .contentFrame()
      .locator('div[role="form"]')
      .getByRole('button', { name: 'Зарегистрироваться' });
    this.menuButtonLocator = this.page.getByRole('button', { name: 'Открыть меню навигации' });
    this.openMenuAriaLocator = this.page.locator('.menu-content-module__menuOpen');
    this.changeThemeButtonLocator = this.page.getByRole('button', {
      name: 'Переключить на светлую тему',
    });
    this.userLogoLocator = this.page.getByAltText('Иконка канала channel61472703');
    this.headerUserMenuLocator = this.page.getByText(
      'channel61472703pw****@mail.ruПрофильМой каналСтудия RUTUBEВыйти',
    );
  }

  //actions
  async open() {
    this.page.goto('https://rutube.ru/');
  }

  async openHeaderUserMenu() {
    this.userLogoLocator.click();
  }

  async changeThemeToWhite() {
    await this.changeThemeButtonLocator.click();
  }

  async openFullMenu() {
    await this.menuButtonLocator.click();
  }

  async openAddPopupList() {
    this.headerAddButtonLocator.click();
  }
  async openNotificationsPopup() {
    this.headerNotificationsButtonLocator.click();
  }
  async openAuthorizationModal() {
    this.headerLoginButtonLocator.click();
  }
  async switchToRegistrationModal() {
    this.switchToRegistrationModalButtonLocator.click();
  }

  //asserions
  async addPopupListHasCorrectAriaSnapshot() {
    await this.checkAriaSnapshot(this.headerAddButtonPopupListLocator, 'addButtonPopupList.yml');
  }
  async notificationsPopupHasCorrectAriaSnapshot() {
    await this.checkAriaSnapshot(this.headerNotificationsPopupLocator, 'notificationsPopup.yml');
  }
  async authorizationModalHasCorrectAriaSnapshot() {
    await this.checkAriaSnapshot(this.authorizationModalLocator, 'authorizationModal.yml');
  }
  async registrationModalHasCorrectAriaSnapshot() {
    await this.checkAriaSnapshot(this.authorizationModalLocator, 'registrationModal.yml');
  }
  async fullMenuHasCorrectAriaSnapshot() {
    await this.checkAriaSnapshot(this.openMenuAriaLocator, 'fullMenuShapshot.yml');
  }
  async headerUserMenuHasCorrectAriaSnapshot() {
    await this.checkAriaSnapshot(this.headerUserMenuLocator, 'headerUserMenuShapshot.yml');
  }
  async headerHasCorrectAriaShapshot() {
    await this.checkAriaSnapshot(this.headerLocator, 'headerAriaShapshot.yml');
  }

  async categoriesTabsHasCorrectAriaShapshot() {
    await this.checkAriaSnapshot(this.categoriesTabLocator, 'categoriesTabsShapshot.yml');
  }
  async menuHasCorrectAriaShapshot() {
    await this.checkAriaSnapshot(this.menuLocator, 'menuShapshot.yml');
  }
  async checkThemeAttributeValue(attributeValue: 'dark2021' | 'white2022') {
    await expect(this.page.locator('html')).toHaveAttribute('data-pen-theme', attributeValue);
  }
}
