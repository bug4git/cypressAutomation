class Login
{
    setUserName (username)
    {
        cy.get("input[placeholder='Username']").type(username);
    }

    setUserPass (password)
    {
        cy.get("input[placeholder='Password']").type(password);
    }

    clickSubmitbtn ()
    {
        cy.get("button[type='submit']").click();
    }

    verifyLogin() 
    {
        cy.get(".oxd-text--h6").should("have.text", "Dashboard")
    }
}
export default Login;
