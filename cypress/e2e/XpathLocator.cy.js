describe ("XpathLocator" , () => {

    it("find no of products", ()=> {
        cy.visit("https://www.elo.shopping/pages/search-results-page?q=polo%20republica")
        cy.xpath("//ul[@class='snize-search-results-content clearfix']/li").should('have.length',16)
    })

    it("chained X path", ()=> {
        cy.visit("https://www.elo.shopping/pages/search-results-page?q=polo%20republica")
        cy.xpath("//ul[@class='snize-search-results-content clearfix']").xpath("./li").should('have.length',16)    //Assertion
    })

})