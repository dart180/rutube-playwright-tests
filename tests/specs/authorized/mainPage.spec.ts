import { test, expect } from '../../fixtures/fixtures';
import { MainPage } from '../../pages/MainPage';

test('Проверка доступности элементов хедера', async ({ mainPage }) => {
  await mainPage.closeModalPopupNotification();
  await mainPage.headerHasCorrectAriaShapshot();
});
test('Проверка доступности элементов попап уведомлений', async ({ mainPage }) => {
  await mainPage.closeModalPopupNotification();
  await mainPage.openNotificationsPopup();
  await mainPage.notificationsPopupHasCorrectAriaSnapshot();
});
test('Проверка доступности элементов раскрытого меню', async ({ mainPage }) => {
  await mainPage.closeModalPopupNotification();
  await mainPage.openFullMenu();
  await mainPage.fullMenuHasCorrectAriaSnapshot();
});
