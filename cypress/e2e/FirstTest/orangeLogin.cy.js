describe('First Test', {testIsolation :false },() => {
   
  
    it('test login', () => {
        const admin = 'Admin';
        const password = 'admin123';
        cy.login(admin, password);
        cy.wait(2000)
    });
    
    it('test login with wrong password', () => {
        cy.get('h6').contains('Dashboard')
        cy.get('.oxd-userdropdown-tab').click();
        cy.get('.oxd-userdropdown-link').contains('Logout').click();
    });
    before('should visit the page', () => {
        cy.clearCookies();   
        cy.log('Puchuflito')
    });

});
