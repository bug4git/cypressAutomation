describe("HTTP Request", ()=> {

    it("GET req", ()=> {
        cy.request('GET', 'https://jsonplaceholder.typicode.com/posts/1')
            .its('status').should('equal', 200);   //Assertion
    })

    it("POST req", ()=> {
        cy.request({ 
            method: 'POST',
            url: "https://jsonplaceholder.typicode.com/posts/" ,
            body: {
                title:"Test post",
                body : "This is post body",
                userID : 1

            }

        }) 
        .its("status").should("equal", 201);

    })

    it("PUT req", ()=> {
        cy.request({ 
            method: 'PUT',
            url: "https://jsonplaceholder.typicode.com/posts/1" ,
            body: {
                title:"Test post - updated",
                body : "This is put call body",
                userID : 1 , 
                ID: 1
                

            }

        }) 
        .its("status").should("equal", 200);

    })

    it("Delete req", ()=> {
        cy.request('DELETE', 'https://jsonplaceholder.typicode.com/posts/1')
            .its('status').should('equal', 200);   //Assertion
    })
    
    
})


