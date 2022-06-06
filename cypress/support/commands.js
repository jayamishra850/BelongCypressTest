// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
Cypress.Commands.add('searchAddress', (address) => {
    cy.get('.Text-vufeqt-0.Copy-sc-14k0iqc-0.Listboxstyles__Option-sc-1901uuj-2.fzZNHD.lhhMmk.lfFBrV').each(($el, index, $list) => {
      
    if($el.text().includes(address)){
        cy.get('.Text-vufeqt-0.Copy-sc-14k0iqc-0.Listboxstyles__Option-sc-1901uuj-2.fzZNHD.lhhMmk.lfFBrV').eq(index).click();
      }
   })
})
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })