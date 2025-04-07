import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class MainPage extends BasePage {
  private readonly headerLocator: Locator;
  private readonly categoriesTabLocator: Locator;
  private readonly menuLocator: Locator;

  constructor(page: Page) {
    super(page);
    this.headerLocator = this.page.getByRole('banner');
    this.categoriesTabLocator = this.page.locator(
      '.freyja_pen-tabs-snipped-list__snipped-list_IgInW',
    );
    // .locator('section').filter({
    //   hasText:
    //     /^ГлавнаяРекомендацииФильмыСериалыТелешоуСпортБлогерыНовостиМузыкаПодкастыДетямТВ онлайн$/,
    // });
    this.menuLocator = this.page.getByLabel('Облегченная панель навигации');
  }

  async open() {
    this.page.goto('https://rutube.ru/');
  }

  async headerHasCorrectAriaShapshot() {
    await expect(this.headerLocator).toMatchAriaSnapshot();
  }

  async categoriesTabsHasCorrectAriaShapshot() {
    await expect(this.categoriesTabLocator).toMatchAriaSnapshot();
  }
  async menuHasCorrectAriaShapshot() {
    await expect(this.menuLocator).toMatchAriaSnapshot();
  }
}
