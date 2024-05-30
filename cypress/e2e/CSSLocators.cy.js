
describe('CSSLocator', () => {
    //test case
    it('csslocator', () => {
        //test steps
        cy.visit("https://www.elo.shopping/")
        cy.get("summary[aria-label='Search'] span").click()
        cy.get("#Search-In-Modal").type("polo republica")
        cy.get("button[aria-label='Search']").click()
        //cy.get("[name= 'login-button']").click()
        cy.get(".main-page-title.page-title.h0").should("be.visible").contains("Search")    //Assertion
    } )
})