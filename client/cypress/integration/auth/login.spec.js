describe('Login', function() {

    it('Test login container', function() {
        cy.visit('/login');
        // we expect a form
        cy.get('form').should('exist');
        // it has email field
        cy.get('form').find('input[type=email]').should('exist').clear();
        // it has password field
        cy.get('form').find('input[type=password]').should('exist').clear();
        // button should exist and be enabled because initial state
        cy.get('form').find('[type=submit]').should('exist')
            .should('be.enabled');
        // input field works
        cy.get('input[type=email]')
            .type('fake@email.com').should('have.value', 'fake@email.com');
        // button should now be disabled
        cy.get('form').find('[type=submit]').should('be.disabled');

        // password field works
        cy.get('input[type=password]')
            .type('password').should('have.value', 'password');
        // button should now be enabled
        cy.get('form').find('[type=submit]').should('be.enabled');

        // test validation
        // invalid email
        cy.get('input[type=email]').clear().type('bademail');
        cy.get('input[type=password]').clear().type('validpassword');
        // button should be disabled
        cy.get('form').find('[type=submit]').should('be.disabled');
        // invalid password
        cy.get('input[type=email]').clear().type('goodemail@test.com');
        cy.get('input[type=password]').clear().type('pw');
        // button should be disabled
        cy.get('form').find('[type=submit]').should('be.disabled');

        // inputs invalid user
        cy.get('input[type=email]').clear().type('testnoexisty@test.com');
        cy.get('input[type=password]').clear().type('validpassword');
        cy.get('form').find('[type=submit]').click();
        cy.get('.noty_layout .noty_type__error').should('exist');

        // valid inputs email
        cy.get('input[type=email]').clear().type('test1@test.com');
        cy.get('input[type=password]').clear().type('validpassword');
        // button should be enabled
        cy.get('form').find('[type=submit]').should('be.enabled');

        // submit field
        cy.get('form').find('[type=submit]').click();


    });

});