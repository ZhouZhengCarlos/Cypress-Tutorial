import StudentPage from '@pageobjects/student/student.page'
import HeaderPage from '@pageobjects/header.page'
import LoginPage from '@pageobjects/login/login.page'


describe('The Student Dashboard page', function () {
    beforeEach(() => {
        StudentPage.login()
    })

    it.only('Student logout', () => {
        cy.get(HeaderPage.dropdownUserProfile).click()

        cy.get(HeaderPage.lblName).should('be.visible')
        cy.get(HeaderPage.lblOrganization).should('be.visible')
        cy.get(HeaderPage.lblSupport).should('be.visible')
        cy.get(HeaderPage.lblLogout).should('be.visible')

        cy.get(HeaderPage.lblLogout).click().click()

        LoginPage.verifyUrl()
    })

    it('Student cancel session', () => {
        cy.get(StudentPage.SessionCard(1)).click();

        cy.get(StudentPage.cantAttend).click();
        cy.get(StudentPage.cantAttendConfirmation).click();

        cy.get(StudentPage.cantAttendConfirmation).should('be.visible');

    })
})