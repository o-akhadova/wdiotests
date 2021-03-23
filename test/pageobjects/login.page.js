import Page from './page';

class LoginPage extends Page { // СЕЛЕКТОРЫ
    get inputUsername () { return $('#normal_login_email'); }
    get inputPassword () { return $('#normal_login_password'); }
    get buttonSubmit () { return $('.login-form-button'); }
    get errorToast () { return $('.ant-notification-notice-message'); }

    open () { //МЕТОД
        return super.open('/');
    }

    setLogin (email) {
        this.inputUsername.setValue(email)
    }

    setPassword(password) {
        this.inputPassword.setValue(password);
    }

    clickSubmitButton () {
        this.buttonSubmit.click();
    }

    submitButtonIsDisabled() { //МЕТОД
        expect(this.buttonSubmit).toBeDisabled();
    }

    errorToastAppeared() {
        expect(this.errorToast).toBeDisplayed();
    }


}

export default new LoginPage();
