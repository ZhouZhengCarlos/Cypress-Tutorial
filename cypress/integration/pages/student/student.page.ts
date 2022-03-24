import Page from '@pageobjects/page';
import LoginPage from '@pageobjects/login/login.page';

class StudentPage extends Page {
    get URL(): string{
        return 'https://staging.app.litteraeducation.com/students';
    }

    get cantAttend(): string {
        return '.chakra-modal__footer > .chakra-button';
    }

    get cantAttendConfirmation(): string {
        return '[data-testid="dialog-confirm-button"]';
    }

    get successModal(): string {
        return '.chakra-toast > .chakra-toast__inner > [data-testid="alert-container"]';
    }
    SessionCard(num: number): string {
        return `.css-gfpmeo > :nth-child(${num})`;
    }

    verifyUrl(): void {
        super.verifyUrl(this.URL);
    }

    login() {
        cy.fixture('credentials.json').then((user) => {
            const student = user.student.email
            cy.visit(LoginPage.URL)
            cy.get(LoginPage.inputEmail).type(student.email)
            cy.get(LoginPage.inputPassword).type(student.password)
            cy.get(LoginPage.btnSignIn).click()
        })
    }
}


export default new StudentPage();