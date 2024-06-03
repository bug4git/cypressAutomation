import Login from "../../PageObjects/loginPage2"

describe ('POM', () => {

    it ('LoginTest', ()=> {
        //should
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get("input[placeholder='Username']").type("Admin")
        cy.get("input[placeholder='Password']").type("admin123")
        cy.get("button[type='submit']").click()
        cy.get(".oxd-text--h6").should("have.text", "Dashboard");

    })
    //using POM
    it ('LoginTest', ()=> {
        //should
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        
        const ln =  new Login();
        
        ln.setUserName("Admin")
        ln.setUserPass("admin123")
        ln.clickSubmitbtn();
        ln.verifyLogin();

    })
//using pom with fixtures
    it.only ('LoginTest', ()=> {
        //should
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        cy.fixture("orangeHRM").then((data)=> {
        const ln =  new Login();
        ln.setUserName(data.username)
        ln.setUserPass(data.password)
        ln.clickSubmitbtn();
        ln.verifyLogin();

        })
        
        

    })

})

