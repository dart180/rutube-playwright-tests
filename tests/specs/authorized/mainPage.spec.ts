import { test, expect } from '../../fixtures/fixtures';

test('Проверка доступности элементов хедера авторизованного пользователя', async ({ mainPage }) => {
  await mainPage.closeModalPopupNotification();
  await mainPage.headerHasCorrectAriaShapshot();
});
test('Проверка доступности элементов попап уведомлений авторизованного пользователя', async ({
  mainPage,
}) => {
  await mainPage.closeModalPopupNotification();
  await mainPage.openNotificationsPopup();
  await mainPage.notificationsPopupHasCorrectAriaSnapshot();
});
test('Проверка доступности элементов раскрытого меню авторизованного пользователя', async ({
  mainPage,
}) => {
  //await mainPage.closeModalPopupNotification();
  await mainPage.openFullMenu();
  await mainPage.fullMenuHasCorrectAriaSnapshot();
});
test('Проверка доступности элементов меню пользователя в хедере авторизованного пользователя', async ({
  mainPage,
}) => {
  await mainPage.openHeaderUserMenu();
  await mainPage.headerUserMenuHasCorrectAriaSnapshot();
});
