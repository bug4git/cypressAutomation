

describe ("iframe-test", ()=> {
    it("test-approach-1", ()=> {
        cy.visit("https://the-internet.herokuapp.com/tinymce")
        const iframe = cy.get("#mce_0_ifr")
            .its("0.contentDocument.body")
            .should("be.visible")
            .then(cy.wrap);

            iframe.clear().type("Welcome")




    })

})