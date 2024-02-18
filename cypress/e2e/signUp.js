const {Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
let random_username = Math.random().toString(36).substring(2, 12);
let random_password = Math.random().toString(36).substring(2, 12);

Given ("I am in demoblaze home page", () => {
	cy.visit('/');
});

When ("I sign up", () => {
    // Sign up
    cy.get('#signin2').click();
    cy.get('#sign-username').click().type(random_username, { force: true }).should('have.value', random_username);
    cy.get('#sign-password').click().type(random_password).should('have.value', random_password);
    cy.contains('.btn-primary', 'Sign up').click();
    //listen to sign up event
    cy.on('window:alert', (message) => {
      expect(message).to.equal('Sign up successful.');
    });
});

When ("I login using valid credentials", () => {
	// Log in
    cy.get('#login2').click();
    cy.get('#loginusername').click().type(random_username, { force: true }).should('have.value', random_username);
    cy.get('#loginpassword').click().type(random_password).should('have.value', random_password);
    cy.contains('.btn-primary', 'Log in').click();

    // Two ways of validating the same
    cy.contains('Welcome ' + random_username).should('be.visible');
    cy.get('a#nameofuser.nav-link').should('have.text', 'Welcome ' + random_username);
	});

Then ("I logout", () => {
    // Log out
    cy.get('#logout2').click();
    cy.get('#signin2').should('be.visible');
});
