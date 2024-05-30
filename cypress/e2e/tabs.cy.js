

describe ("child-tabs", ()=>{
   
    it.skip("tabs-test", ()=>{
        cy.visit("https://the-internet.herokuapp.com/windows")  //parent tab
        cy.get(".example >a")
            .invoke("removeAttr", "target")
            .click();                                                                //clicking on link 
        cy.url().should("include", "https://the-internet.herokuapp.com/windows/new") //assertion
        cy.wait(5000);  //put wait
        cy.go("back");

    })
    
    it("tabs-test", ()=>{
        cy.visit("https://the-internet.herokuapp.com/windows")  //parent tab
        cy.get(".example >a")
            .invoke("removeAttr", "target")
            .click();                                                                //clicking on link 
        cy.url().should("include", "https://the-internet.herokuapp.com/windows/new") //assertion
        cy.wait(5000);  //put wait
        cy.go("back");

    })

})