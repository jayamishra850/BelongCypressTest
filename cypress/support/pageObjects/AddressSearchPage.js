class AddressSearchPage
{
 getAddressInput()
 {
     return cy.get('[data-testid="step-address-lookup__input"]')
 }
 getAddressList()
 {
    return cy.get('#queryList')
 }
 getAddressListItems()
 {
    return cy.get('.Text-vufeqt-0.Copy-sc-14k0iqc-0.Listboxstyles__Option-sc-1901uuj-2.fzZNHD.lhhMmk.lfFBrV')
 }
 getCheckAddressButton()
 {
    return cy.get('[data-testid="step-address-lookup__submit-button"]')
 }
 
}
export default AddressSearchPage