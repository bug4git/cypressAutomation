
describe ("Dropdown test-suit", ()=> {
    //testcase
    it.skip("droptown-test1", ()=>{
        //steps
        cy.visit("https://artoftesting.com/samplesiteforselenium")
        cy.get("#testingDropdown").should("be.visible")
        cy.get("#testingDropdown").select("Performance Testing")
        cy.get("#testingDropdown").select("Manual Testing").should("have.value", "Manual Testing")


    })

    it.skip("Dropdown without select", ()=> {

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/time/viewEmployeeTimesheet")
        cy.get("input[placeholder='Search']").click()
            .type("dashboard")
            .type("{enter}")

    })
})

    it("auto-selecting dropdown", ()=> {

        cy.visit("https://www.wikipedia.org/")
        cy.get("#searchInput").click()
            .type("lahore")
            //.type("{enter}")

        //cy.get(".mw-page-title-main").should("contain", "Lahore")  //assertion
        cy.get(".suggestion-title").contains("Lahore Qalandars").click()

    })