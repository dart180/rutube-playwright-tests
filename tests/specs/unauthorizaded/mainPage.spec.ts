import test from '@playwright/test';
import { MainPage } from '../../pages/MainPage';

test('Проверка доступности элементов хедера', async ({ page }) => {
  const mainPage = new MainPage(page);
  await mainPage.open();
  await mainPage.closeCookiesAlert();
  await mainPage.headerHasCorrectAriaShapshot();
});
test('Проверка доступности элементов табов категорий', async ({ page }) => {
  const mainPage = new MainPage(page);
  await mainPage.open();
  await mainPage.closeCookiesAlert();
  await mainPage.categoriesTabsHasCorrectAriaShapshot();
});
test('Проверка доступности элементов бокового меню', async ({ page }) => {
  const mainPage = new MainPage(page);
  await mainPage.open();
  await mainPage.closeCookiesAlert();
  await mainPage.menuHasCorrectAriaShapshot();
});
