describe('screenShot-suit', ()=> {

    it("Capture Screenshots", ()=> {
        
        //cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        //cy.wait(5000);
        //cy.screenshot("homepage");
        //cy.wait(5000);
        //cy.get("img[alt = 'company-branding']").screenshot("logo");

        cy.visit("https://opencart.antropy.co.uk/")
        cy.get("body > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(4) > div:nth-child(1) > div:nth-child(2) > h4:nth-child(1) > a:nth-child(1)").click()
        cy.get(".col-sm-4>h1").should("have.text", "Canon EOS 5D")
    
    })  



})