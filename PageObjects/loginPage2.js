class Login
{
    txtUserName= "input[placeholder='Username']"
    txtPassword= "input[placeholder='Password']"
    btnSubmit= "button[type='submit']"
    lblMsg= ".oxd-text--h6";


    setUserName (username)
    {
        cy.get(this.txtUserName).type(username);
    }

    setUserPass (password)
    {
        cy.get(this.txtPassword).type(password);
    }

    clickSubmitbtn ()
    {
        cy.get(this.btnSubmit).click();
    }

    verifyLogin() 
    {
        cy.get(this.lblMsg).should("have.text", "Dashboard")
    }
}
export default Login;
