export default abstract class Page {
    verifyUrl(url: string){
        cy.url().should('equal', url)
    }
}