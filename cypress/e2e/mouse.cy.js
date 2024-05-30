describe ("mosue-events", ()=> {

    it ("mouseover-test1", ()=> {
        cy.visit("https://opencart.antropy.co.uk/")
       // cy.get('.open > .dropdown-menu > .dropdown-inner > .list-unstyled > :nth-child(2) > a').should("not.be.visible").wait(4000);
        cy.get('.nav > :nth-child(1) > .dropdown-toggle').trigger("mouseover").click();
        cy.get('.open > .dropdown-menu > .dropdown-inner > .list-unstyled > :nth-child(2) > a').should("be.visible")

    })

        it("right-click", ()=> {

            cy.visit("https://swisnl.github.io/jQuery-contextMenu/demo.html")
            cy.get('.context-menu-icon-copy >span', {timeout: 10000}).should("not.be.visible");
            //cy.get('.context-menu-one.btn.btn-neutral').should("be.visible").trigger("contextmenu");   //Apprach 2
            cy.get(".context-menu-one.btn.btn-neutral").rightclick();
            cy.get('.context-menu-icon-copy >span', {timeout: 10000}).should("be.visible");

        })
    it("double-click", ()=> {
        cy.visit("https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick")
        //cy.get("button[ondblclick='myFunction()']", {timeout: 100000}).should("be.visible")
        cy.frameLoaded("#iframeResult");     //load the frame
        cy.iframe("#iframeResult").find("button[ondblclick='myFunction()']").trigger("dblclick")
        cy.iframe("#iframeResult").find("#demo").should("have.text", "Hello World");
    })
    it("drag and Drop test", ()=> {
        cy.visit("http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html")
        cy.get("#box1").drag("#box106", {force: true});
    })

    it.only("scroll", ()=> {
        cy.visit("https://www.countries-ofthe-world.com/flags-of-the-world.html", {failOnStatusCode: false})
        cy.get("").scrollIntoView({duration: 2000})
        cy.get("").should("be.visible")

    })
})