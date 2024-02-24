describe('Site LinkedIn', () => {
   
    it('Login Test', () => {
        cy.visit('https://linkedin.com')

        cy.get('.nav__button-secondary').click();
        cy.get('#username').type('paul@yahoo.ro');
        cy.get('#password').type('123456');
        cy.get('.btn__primary--large').click();
        cy.get(':nth-child(4) > .app-aware-link').should('exist');
        cy.screenshot();

    })
})