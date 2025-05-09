import { test, expect } from '../../fixtures/fixtures';
import { MainPage } from '../../pages/MainPage';

test('Проверка доступности элементов хедера неавторизованного пользователя', async ({
  mainPage,
}) => {
  await mainPage.headerHasCorrectAriaShapshot();
});
test('Проверка доступности элементов табов категорий неавторизованного пользователя', async ({
  mainPage,
}) => {
  await mainPage.categoriesTabsHasCorrectAriaShapshot();
});
test('Проверка доступности элементов бокового меню неавторизованного пользователя', async ({
  mainPage,
}) => {
  await mainPage.menuHasCorrectAriaShapshot();
});
test('Проверка доступности элементов списка добавления контента неавторизованного пользователя', async ({
  mainPage,
}) => {
  await mainPage.openAddPopupList();
  await mainPage.addPopupListHasCorrectAriaSnapshot();
});
test('Проверка доступности элементов попап уведомлений неавторизованного пользователя', async ({
  mainPage,
}) => {
  await mainPage.openNotificationsPopup();
  await mainPage.notificationsPopupHasCorrectAriaSnapshot();
});
test('Проверка доступности элементов модального окна авторизации неавторизованного пользователя', async ({
  mainPage,
}) => {
  await mainPage.openAuthorizationModal();
  await mainPage.authorizationModalHasCorrectAriaSnapshot();
});
test('Проверка доступности элементов модального окна регистрации неавторизованного пользователя', async ({
  mainPage,
}) => {
  await mainPage.openAuthorizationModal();
  await mainPage.switchToRegistrationModal();
  await mainPage.registrationModalHasCorrectAriaSnapshot();
});
test('Проверка доступности элементов раскрытого меню неавторизованного пользователя', async ({
  mainPage,
}) => {
  await mainPage.openFullMenu();
  await mainPage.fullMenuHasCorrectAriaSnapshot();
});
test('Переключение темы неавторизованного пользователя', async ({ mainPage }) => {
  await mainPage.checkThemeAttributeValue('dark2021');
  await mainPage.changeThemeToWhite();
  await mainPage.checkThemeAttributeValue('white2022');
});
