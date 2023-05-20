    /// <reference types= "cypress" />


    Cypress.Commands.add('openUrl', ()=>{
        cy.visit('https://phptravels.net/login')
        })