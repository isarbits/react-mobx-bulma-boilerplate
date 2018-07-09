describe('Password reset', function() {

    it('Init test database', function() {
        cy.exec('yarn pretest');
    });

    it('Try login with bad password, click password reset', function() {
        cy.visit('/login');

        // invalid password
        cy.get('input[type=email]').clear().type('goodemail@test.com');
        cy.get('input[type=password]').clear().type('thisdoesnotexist');
        // button should be disabled
        cy.get('form').find('[type=submit]').should('be.enabled').click();

        cy.get('nav').contains('Reset your password').should('have.attr', 'href', '/forgotpassword').click();
        cy.url().should('contain', 'forgotpassword');
    });

    it('Password reset with invalid email', function() {
        cy.visit('/forgotpassword');
        // invalid email
        cy.get('input[type=email]').clear().type('emaildoesnotexist@test.com');
        cy.get('form').find('[type=submit]').click();
        cy.get('.noty_layout .noty_type__error').should('exist');
    });

    it('Password reset with valid email', function() {
        cy.visit('/forgotpassword');
        // invalid email
        cy.get('input[type=email]').clear().type('resetthisemail@test.com');
        cy.get('form').find('[type=submit]').click();
    });


});