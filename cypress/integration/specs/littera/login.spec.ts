import LoginPage from '@pageobjects/login/login.page'
import StudentPage from '@pageobjects/student/student.page'

describe('Login Littera', () => {
    beforeEach(function(){
        cy.visit(LoginPage.URL)
        cy.fixture('credentials.json').then((user) => {
             this.student = user.student.email
        })
    })
    
    it('Login as student', function(){
        cy.get(LoginPage.inputEmail).type(this.student.email)
        cy.get(LoginPage.inputPassword).type(this.student.password)
        cy.get(LoginPage.btnSignIn).click()
        StudentPage.verifyUrl()
        cy.contains("Hello Alvaro")
    })
})