/*
js alert
js confirm 
js prompt 

*/






describe ("alert-test", ()=> {

    it ("alert-pop", ()=> {

        cy.visit("https://testpages.herokuapp.com/styled/alerts/alert-test.html")
        cy.get("#alertexamples").click()
        cy.on("window:alert", (t)=> {
            expect(t).contains("I am an alert box!")     //assertion
        })
        cy.get("#alertexplanation").should("have.text", "You triggered and handled the alert dialog")
    })

    it("alert-confirm OK-button", ()=> {

        cy.visit("https://testpages.herokuapp.com/styled/alerts/alert-test.html")
        cy.get("#confirmexample").click()
        cy.on("window:confirm", (t)=> {
            expect(t).contains("I am a confirm alert")
        })
        //cypress close the alert by clicking Ok-button by default
        cy.get("#confirmreturn").should("have.text", "true")  

    })

    it("alert-confirm cancel-button", ()=> {

        cy.visit("https://testpages.herokuapp.com/styled/alerts/alert-test.html")
        cy.get("#confirmexample").click()
        cy.on("window:confirm", (t)=> {
            expect(t).contains("I am a confirm alert")
        })
        //make cancel event to cancel the event. 
        cy.on("window:confirm", ()=> false)   //it will cancel the alert
        //cypress close the alert by clicking cancel-button by default
        cy.get("#confirmreturn").should("have.text", "false")  

    })
    it("alert-prompt", ()=> {
        cy.visit("https://testpages.herokuapp.com/styled/alerts/alert-test.html")
        //controller for prompt
        cy.window().then((win)=> {
            cy.stub(win, "prompt").returns("welcome");
        })
        cy.get("#promptexample").click()

        cy.on("window:confirm", ()=> false)

        //cypress will automaticaly OK the the prompt alert
        cy.get("#promptreturn").should("have.text", "welcome")
        cy.get("#promptexplanation").should("have.text", "You clicked Cancel. 'prompt' returned ").include("#promptretval")
        /*cy.get("#promptexplanation")
        .then(($el) => {
            const text = $el.text();
            expect(text).to.contain("You clicked OK.");
            expect(text).to.contain("'prompt' returned welcome");
        });*/
            
        //.should("have.text", "You clicked OK. 'prompt' returned welcome" )

    })
    it("auth-alert", ()=> {
        /*cy.visit("https://the-internet.herokuapp.com/basic_auth", {auth: {
                                                                    username: "admin",
                                                                    password: "admin"

        }});
        cy.get("div[class = 'example'] p").should("have.contain", "Congratulations! You must")*/

        //try with 'admin:admin@'
        cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth")
        cy.get("div[class = 'example'] p").should("have.contain", "Congratulations! You must") 

    })

})