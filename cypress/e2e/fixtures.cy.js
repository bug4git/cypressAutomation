describe("fixtures", ()=> {

    it("demo-test", ()=> {

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.fixture('orangeHRM').then((data)=>{
            cy.get("input[placeholder='Username']").type(data.username);
            cy.get("input[placeholder='Password']").type(data.password);
            cy.get("button.orangehrm-login-button").click();
            cy.get(".oxd-text--h6").should("have.text", data.expected);

        })
    })

    //Access through Hook method
    
    
    let userdata;
    before( ()=> {
        cy.fixture("orangeHRM").then((data)=>{
            userdata = data;
              })
})
    it("fixturedemoHook", ()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        
        cy.get("input[placeholder='Username']").type(userdata.username);
        cy.get("input[placeholder='Password']").type(userdata.password);
        cy.get("button.orangehrm-login-button").click();
        cy.get(".oxd-text--h6").should("have.text", userdata.expected);

    })



    it.only("fixturedemoHook2", ()=>{

        cy.fixture("orangeHRM").then((data)=> {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        data.forEach((userdata)=>{
               
        
        cy.get("input[placeholder='Username']").type(userdata.username);
        cy.get("input[placeholder='Password']").type(userdata.password);
        cy.get("button.orangehrm-login-button").click();

        if(userdata.username=='Admin' && userdata.password == 'admin123'){
            cy.get(".oxd-text--h6").should("have.text", userdata.expected);        
        }
        else{
            cy.get(".oxd-alert-content-text").should("have.text", userdata.expected); 
        }
        

            })
        })
        

    })
})