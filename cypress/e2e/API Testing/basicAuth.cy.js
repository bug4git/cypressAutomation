describe("Authentication", ()=> {

    it("Basic Authentication", ()=> {

        cy.request({
            method: 'GET',
            url: 'https://postman-echo.com/basic-auth',
            auth: {
                username: 'postman' ,
                pass: 'password'
            }
        }).then((response)=> {
            expect(response.status).to.eq(200)
            expect(response.body.authenticated).to.eq(true);
        })
    })

    it("Digest Authentication", ()=> {

        cy.request({
            method: 'GET',
            url: 'https://postman-echo.com/basic-auth',
            auth: {
                username: 'postman' ,
                pass: 'password',
                method: 'digest'
            }
        }).then((response)=> {
            expect(response.status).to.eq(200)
            expect(response.body.authenticated).to.eq(true);
        })
    })

    it("Bearer Token Auth", ()=>{
       // const token = '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'

        cy.request({
            method: 'GET',
           // url: 'https://api.github.com/user/repos' ,
            headers: {
                Authorization:'Bearer '+ token
            }
        }).then((response)=>{
            expect(response.status).to.eq(200);
            
        })
    })

    it("API authentication check", ()=> {

        cy.request({
            method: 'GET' ,
            url: 'https//...',
            qs: {
                appid: 'b80e28c1a639fe295a0d1c0ff9285b15'

            }
        }).then((response)=> {
            expect(response.status).to.eq(200);
        })
    })
})