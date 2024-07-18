describe('IMC Calculator', () => {
    beforeEach(() => {
        cy.visit('../../index.html');
    });

    it('Should calculate IMC and display the correct result for underweight', () => {
        cy.get('#weight').type('50');
        cy.get('#height').type('170');
        cy.get('#number').should('have.text', '17.30');
        cy.get('#result').should('have.text', 'Abaixo do peso');
    });

    it('Should calculate IMC and display the correct result for normal weight', () => {
        cy.get('#weight').type('65');
        cy.get('#height').type('170');
        cy.get('#number').should('have.text', '22.49');
        cy.get('#result').should('have.text', 'Normal');
    });

    it('Should calculate IMC and display the correct result for overweight', () => {
        cy.get('#weight').type('80');
        cy.get('#height').type('170');
        cy.get('#number').should('have.text', '27.68');
        cy.get('#result').should('have.text', 'Sobrepeso');
    });

    it('Should calculate IMC and display the correct result for obesity', () => {
        cy.get('#weight').type('100');
        cy.get('#height').type('170');
        cy.get('#number').should('have.text', '34.60');
        cy.get('#result').should('have.text', 'Obesidade');
    });

    it('Should calculate IMC and display the correct result for severe obesity', () => {
        cy.get('#weight').type('120');
        cy.get('#height').type('170');
        cy.get('#number').should('have.text', '41.52');
        cy.get('#result').should('have.text', 'Obesidade grave');
    });
});