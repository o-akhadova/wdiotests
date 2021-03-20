import LoginPage from  '../pageobjects/login.page';
import ProfilePage from '../pageobjects/profile.page'

describe('Auth', () => {
    it('user logs in with valid data', () => {
        LoginPage.open();
        LoginPage.setLogin('kremenchugnails@gmail.com');
        LoginPage.setPassword('test30091995persiki');
        LoginPage.clickSubmitButton();
        ProfilePage.isOpen();
    });
});

