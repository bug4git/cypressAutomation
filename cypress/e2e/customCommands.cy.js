//click on link using lable
//overwriting existing contains() command
//re-useable custom command

describe("custom-command", ()=>{

    it("handling -links", ()=> {
        cy.visit("https://demo.nopcommerce.com/")
        cy.clickLink("Apple MacBook Pro 13-inch");
        cy.get(".product-name>h1").should("have.text", "Apple MacBook Pro 13-inch")



    })

    it("overwriting custom command", ()=> {
        cy.visit("https://demo.nopcommerce.com/")
        cy.clickLink("APPLE MACBOOK Pro 13-inch");
        cy.get(".product-name>h1").should("have.text", "Apple MacBook Pro 13-inch")

    })

    it.only("login command", ()=> {
        cy.visit("https://demo.nopcommerce.com/")
        cy.wait(3000);
        cy.clickLink("Log in");
        cy.loginapp("testing@gmail.com", "testing123");

    })

    
})