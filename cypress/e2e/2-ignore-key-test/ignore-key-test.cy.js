describe('IMC Calculator', () => {
    beforeEach(() => {
        cy.visit('../../index.html');
    });

    it('Should prevent typing unwanted characters in the weight field', () => {
        cy.get('#weight').type('-').should('have.value', '');
        cy.get('#weight').type('+').should('have.value', '');
        cy.get('#weight').type('e').should('have.value', '');
    });
});