const {Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
const products = require('../fixtures/products.json');
const clients = require('../fixtures/clientData.json');

Given ("I have an item in the cart", () => {
	cy.visit('/');
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
        cy.contains('td', clickedText).should('be.visible');
		});
	});
});

When ("I complete the order placement form", () => {
	//Fill form using object client
	cy.contains('.btn', 'Place Order').click();
	cy.get('#name').click().type(clients.client[0].Name);
	cy.get('#country').click().type(clients.client[0].Country);
	cy.get('#city').click().type(clients.client[0].City);
	cy.get('#card').click().type(clients.client[0].CreditCard);
	cy.get('#month').click().type(clients.client[0].Month);
	cy.get('#year').click().type(clients.client[0].Year);
});

Then ("I place the order", () => {
	cy.contains('.btn', 'Purchase').click();
});

Then ("The placed order sign should be displayed", () => {
	cy.get('.sweet-alert > h2').should('be.visible').should('have.text','Thank you for your purchase!');
	cy.get('.sa-success').should('be.visible');
	cy.get('.lead').should(($element) => {
       const text = $element.text();
       expect(text).to.contain(clients.client[0].Name);
       expect(text).to.contain(clients.client[0].CreditCard);
    });
    cy.get('.confirm').click();
});

