describe ("radiobutton-test", ()=> {
    //testcases
    it ("radioBtn-test1", ()=> {
        //teststeps
        cy.visit("http://test.rubywatir.com/radios.php")
        cy.get("input[value='Radio1']").should("be.visible")
        cy.get("input[value='Nope']").should("be.visible")
        cy.get("input[value='No']").should("be.visible")
        //cy.get("input[value='Nope']").should("be.visible")
        //cy.get("input[value='Nope']").should("be.visible")

        cy.get("input[value='Radio1']").check().should('be.checked')
        cy.get("input[value='Nope']").should("not.be.checked")
        cy.get("input[value='No']").should("not.be.checked")

        cy.get("input[value='Nope']").check().should("be.checked")
        
        //unchecked the checkbox
        //cy.get("input[value = 'Nope']").uncheck().should("not.be.checked")


    })

    it ("checkbox-test", ()=> {
        cy.visit("http://test.rubywatir.com/checkboxes.php")
        //check visibility 
        cy.get("input[value='soccer']").should("be.visible")
        cy.get("input[value='football']").should("be.visible")
        cy.get("input[value='baseball']").should("be.visible")
        cy.get("input[value='basketball']").should("be.visible")
        cy.get("input[value='snooker']").should("be.visible")
        cy.get("input[value='rugby']").should("be.visible")
        cy.get("input[value='golf']").should("be.visible")
        cy.get("input[value='netball']").should("be.visible")

        //mark check all checkboxes
        cy.get("input[value='soccer']").check().should("be.checked")
        cy.get("input[value='football']").check().should("be.checked")
        cy.get("input[value='baseball']").check().should("be.checked")
        cy.get("input[value='basketball']").check().should("be.checked")
        cy.get("input[value='snooker']").check().should("be.checked")
        cy.get("input[value='rugby']").check().should("be.checked")
        cy.get("input[value='golf']").check().should("be.checked")
        cy.get("input[value='netball']").check().should("be.checked")

        //unmark all check boxes
        cy.get("input[value='soccer']").uncheck().should("not.be.checked")
        cy.get("input[value='football']").uncheck().should("not.be.checked")
        cy.get("input[value='baseball']").uncheck().should("not.be.checked")
        cy.get("input[value='basketball']").uncheck().should("not.be.checked")
        cy.get("input[value='snooker']").uncheck().should("not.be.checked")
        cy.get("input[value='rugby']").uncheck().should("not.be.checked")
        cy.get("input[value='golf']").uncheck().should("not.be.checked")
        cy.get("input[value='netball']").uncheck().should("not.be.checked")




    })
})