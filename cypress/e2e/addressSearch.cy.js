import HomePage from '../support/pageObjects/HomePage'
import InternetPlansPage from '../support/pageObjects/InternetPlansPage'
import AddressSearchPage from '../support/pageObjects/AddressSearchPage'
import EligibilityCheckSuccessPage from '../support/pageObjects/EligibilityCheckSuccessPage'

/// <reference types="Cypress" />

describe('E2E test for Address eligibility check', () => {
  let data;
  before(() => {
    cy.fixture('testdata').then(function(testdata){
    data=testdata
    })
  })
  
  it('Check if Address is eligible for InternetPlans', () => {
    const hompage=new HomePage()
    const internetplanspage =new InternetPlansPage()
    const addresssearchpage =new AddressSearchPage()
    const eligibilitychecksuccesspage =new EligibilityCheckSuccessPage()

    cy.visit(Cypress.env('url'))
    cy.title().should('include', data.HomePageTitle)

    cy.scrollTo(0, 500)
    hompage.getInternetPlansButton().click({force: true})
    cy.title().should('include', data.InternetPlansPageTitle)

    internetplanspage.getCheckAddressButton().click()
    
    addresssearchpage.getAddressInput().type(data.TestAddress)
    addresssearchpage.getAddressList().should('be.visible').then(()=>{
      cy.searchAddress(data.TestAddress)
    })
   
    cy.wait(2000)
    addresssearchpage.getCheckAddressButton().click()
    eligibilitychecksuccesspage.getSeccussMessage().should('have.text',data.eligibilityChecksuccessfulMessage)
   
  })
})
