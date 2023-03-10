/// <reference types="cypress" />

describe ('To check if items can be removed from cart via description pages', ()=> {
        
    beforeEach('Login form', ()=> {
    
        cy.visit('https://www.saucedemo.com/')
        //found locator by tag name and attriubte value
        cy.get('input[placeholder="Username"]').type("standard_user")
        //found locator by Attribute name and value and type
        cy.get('[placeholder="Password"][type="password"]').type("secret_sauce")
        cy.get('#login-button').click()
        cy.get('#add-to-cart-sauce-labs-backpack').click()
        
    })
it('Shopping cart', ()=> {
    
    cy.get('#item_4_title_link').click()
   // cy.get ('#add-to-cart-sauce-labs-bike-light').click()
    cy.wait(1000)
    
    cy.get('#remove-sauce-labs-backpack').click()
    //.should("","shopping_cart_badge")
})
})