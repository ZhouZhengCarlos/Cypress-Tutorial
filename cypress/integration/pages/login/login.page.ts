import Page from "../page";

class LoginPage extends Page {
    get URL(): string{
        return 'https://staging.login.litteraeducation.com/';
    }

    get inputEmail() {
        return 'input[id=email]';
    }

    get inputPassword() {
        return 'input[id=password]';
    }

    get btnSignIn() {
        return 'button[type=submit]';
    }

    verifyUrl(): void {
        super.verifyUrl(this.URL);
    }
}

export default new LoginPage();