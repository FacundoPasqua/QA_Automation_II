
describe('First Test', () => {
    beforeEach('should visit the page', () => {
        cy.visit('https://www.google.com.ar/');
    });
    it('should find the title', () => {
        cy.get('img').should('be.visible');
        cy.get('textarea').eq('0').type('First Test');

    });

});