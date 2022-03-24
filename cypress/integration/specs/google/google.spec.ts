
describe('Google Search', () => {
    it('Search Elden Ring', () => {
        cy.visit('https://www.google.com/')
        cy.contains('Gmail')
        cy.get('.gLFyf').type('Elden Ring').type('{enter}')
        cy.contains('Elden Ring')
    })
})