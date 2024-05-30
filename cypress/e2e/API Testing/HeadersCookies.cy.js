describe("Headers & Cookies", ()=> {
// before test we need to generate a Token
    let authToken = null;

    before("creating access token", ()=> {

        cy.request({
            method: 'POST' ,
            url: 'https://simple-books-api.glitch.me/api-clients/' ,
            headers: {
                'Content-Type' : 'application/json'
            },
            body: {
                
                    "clientName" : "Lexus" ,
                    "clientEmail" : Math.random().toString(5).substring(2) + "@gmail.com"
                
            }

        }).then((response) => {
            authToken = response.body.accessToken;
        })

    })

    it("Creating new order", ()=> {

        cy.request({
            method : 'POST' ,
            url: 'https://simple-books-api.glitch.me/orders/' ,
            headers: {
                'Content-Type' : 'application/json' , 
                'Authorization' : 'Bearer ' + authToken
            },
            body: {
                 
                    "bookId" : 1 ,
                    "customerName" : "xyz"
                
            }
        }).then( (response)=>{
            expect(response.status).to.eq(201);
            expect(response.body.created).to.eq(true); 
        })

    })

    it("fetching the orders", ()=> {

        cy.request({
            method: 'GET' ,
            url: 'https://simple-books-api.glitch.me/orders/jt8EjziSfrr-T-sqQZbU7' ,
            headers: {
                'Content-Type' : 'application/json',
                'Authorization' : 'Bearer ' + authToken
            },
            cookies: {
                'cookieName' : 'mycookie'
            }   
        }) .then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).has.length(1);
        })


    })
    



})