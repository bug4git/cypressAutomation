

describe ('Assertions', () => {

    it ('Implicit-Assertions', ()=> {
        //should
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.url().should('include', 'orangehrmlive.com')
        cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.url().should('contain', 'orange')

    })

    it ('Implicit-Assertions with and', ()=> {
        //should & and 
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.url().should('include', 'orangehrmlive.com')
        .and('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .and('contain', 'orange')
    })

    it ('Implicit-Assertions with and Negative', ()=> {
        //should
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.url().should('include', 'orangehrmlive.com')
        .should('not.eq', 'https://opensourcedemo.orangehrmlive.com/web/index.php/auth/login')  //negative assertions
        .should('not.contain', 'pink')  //negative assertions
    })

    it ('Implicit-Assertions with for title', ()=> {
        //should
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.title().should('include', 'Orange')
        .and('not.eq', 'Orange HRM')  //negative assertions 
        .and('not.contain', 'P')  //negative assertions 

        cy.get('.orangehrm-login-branding > img').should('be.visible')    //logo visible or not
          .and('exist')                                                  // exist or not
        //cy.get('.orangehrm-login-branding > img').should('exist')

        //cy.xpath('//a').should('have.length', 5)

    })

    it ('Implicit-catch all links', ()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.xpath('//a').should('be.visible','have.length', 5)    // check no of all links present on a page
        cy.get("input[name='username']").type("Admin")
        cy.get("input[name='username']").should("have.value","Admin")

    })

    it('Explicit-login', ()=> {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get("input[name='username']").should("be.visible").type("Admin")
        cy.get("input[name='password']").type("admin123")
        //cy.get("")
        cy.get("button[type='submit']").click()

        //custom explicit assertions
        
        let expectedName = "FirstNameTest LastNameTest";  //variable for expected name 

        cy.get("p.oxd-userdropdown-name").then((x)=>{
            let actualName = x.text();
            //use expect assertion BDD style
            expect (actualName).to.equal(expectedName)
            expect (actualName).to.not.equal(expectedName)

            //TDD style 
            assert.equal(actualName,expectedName)
            assert.notEqual(actualName,expectedName)


        })



    })


})