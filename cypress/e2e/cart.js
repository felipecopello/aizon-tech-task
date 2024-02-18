const {Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
const products = require('../fixtures/products.json');

let textAmount = '';
Given ("I am in demoblaze home page", () => {
	cy.visit('/');
});

When ("I add a random item to the cart", () => {
	cy.contains(products.products[Math.floor(Math.random() * products.products.length)].name).click();

    let clickedText;
    cy.get('.card > .card-block > .card-title > .hrefch').its('length').then(length => {
      const randomIndex = Cypress._.random(length - 1);

      // We click a random product, and assert we are taken to that product page
      cy.get('.card > .card-block > .card-title > .hrefch').eq(randomIndex).click().invoke('text').then(text => {
        clickedText = text;
        cy.get('.name').should('have.text', clickedText);
        cy.contains('Add to cart').click();
        cy.on('window:alert', (message) => {
          expect(message).to.equal('Product added');
        });
        cy.contains('Cart').click();

        // The selected item should be displayed in the cart
        cy.contains('td', clickedText.trim()).should('exist');
		});
	});
});

When ("I delete the item from the cart", () => {
	// The total order amount should match the item amount
	cy.get('#totalp').invoke('text').then(text => {
	  textAmount = text;
	  cy.contains('td', textAmount).should('exist');
	  cy.contains('Delete').click();
	});
});

Then ("The item should not be present", () => {
	  // After deleting the element from the cart we assert is not present anymore
	  cy.get('#totalp').should('not.be.visible');
	  cy.contains('td', textAmount).should('not.exist');
});
