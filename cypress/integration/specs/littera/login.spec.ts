import LoginPage from '@pageobjects/login/login.page'
import StudentPage from '@pageobjects/student/student.page'

describe('Login Littera', () => {
    let student: { email: string; password: string; }
    beforeEach(() => {
        cy.visit(LoginPage.URL)
        cy.fixture('credentials.json').then((user) => {
             student = user.student.email
        })
    })
    
    it('Login as student', () => {
        cy.get(LoginPage.inputEmail).type(student.email)
        cy.get(LoginPage.inputPassword).type(student.password)
        cy.get(LoginPage.btnSignIn).click()
        StudentPage.verifyUrl()
        cy.contains("Hello Alvaro")
    })
})