/// <reference types="cypress" />

describe ('To check if cart with items can be accessed', ()=> {
        
    beforeEach('Login form', ()=> {
    
        cy.visit('https://www.saucedemo.com/')
        //found locator by tag name and attriubte value
        cy.get('input[placeholder="Username"]').type("standard_user")
        //found locator by Attribute name and value and type
        cy.get('[placeholder="Password"][type="password"]').type("secret_sauce")
        cy.get('#login-button').click()

        cy.get('#add-to-cart-sauce-labs-backpack').click()
        cy.get('#add-to-cart-sauce-labs-bike-light').click()
    //cy.wait(1000)
   //cy.get('#shopping_cart_container').scrollIntoView()
        
    })
it('Shopping cart', ()=> {
    cy.wait(1000)

    //cy.get('.shopping_cart_link').click()
   
    cy.get('#shopping_cart_container').click()
})
})