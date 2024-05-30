//get Oauth access token
//pass three query parameters client_id, client_secret, code


describe ("OAuth2", ()=> {

    const accessToken = "";

    it("get Oauth2 access token", ()=> {
        cy.request({
            method: 'POST' , 
            url: 'https://github.com/login/oauth/access_token' ,
            qs: {
                client_id: 'Ov23liCokd78qjdCJD4M' ,
                client_secret: '777d9de00f5f99cb72efcdad70aeaa4c9366ebaf',
                code: "769d479aef8dbdb69df0"
            }

        }).then((response)=> {
            const accessToken = "";
            //access_token=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&scope=&token_type=bearer
            const params = response.body.split('&'); 
            accessToken = params[0].split("=")[1];
        })
    })

    it ("OAuth2", ()=> {

        cy.request({
            method: 'GET' ,
            url: 'https://api.github.com/user/repos' ,
            headers: {
                Autherization: 'Bearer ' + accessToken
            }
        }).then((response)=>{
            expect (response.status).to.eq(200);
        })
    })
})