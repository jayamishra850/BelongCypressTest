class HomePage
{
    getInternetPlansButton()
    {
        return cy.get(':nth-child(3) >[label="See internet plans"]')
    }
    
}
export default HomePage