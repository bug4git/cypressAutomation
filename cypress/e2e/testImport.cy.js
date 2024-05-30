import Login from "../../PageObjects/loginPage2";

describe("abc", ()=> {

    it("test1", ()=> {
        cy.visit("")

        const ln = new Login();
        ln.setUserName();
    })
})