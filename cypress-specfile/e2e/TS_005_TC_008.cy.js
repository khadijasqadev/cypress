/// <reference types="cypress" />

describe ('To check if items can be added to cart', ()=> {
        
    beforeEach('Login form', ()=> {
    
        cy.visit('https://www.saucedemo.com/')
        //found locator by tag name and attriubte value
        cy.get('input[placeholder="Username"]').type("standard_user")
        //found locator by Attribute name and value and type
        cy.get('[placeholder="Password"][type="password"]').type("secret_sauce")
        cy.get('#login-button').click()
        
    })
it('Shopping cart', ()=> {
    

    //cy.get('.shopping_cart_link').click()
   
    cy.get('#add-to-cart-sauce-labs-backpack').click()
    cy.get ('#add-to-cart-sauce-labs-bike-light').click()
    cy.wait(1000)
    cy.get('#shopping_cart_container').scrollIntoView()
    //.should("","shopping_cart_badge")
})
})