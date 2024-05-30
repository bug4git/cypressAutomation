describe("Post-request" , ()=> {

    it("Approaach 1", ()=> {

        const requestBody = {
            touristName : "Mike" ,
            tourist_Email: "john@1234.com" , 
            location : "Paris"
        }
        cy.request({
            method: 'POST' , 
            url: "https://jsonplaceholder.typicode.com/posts/" ,
            body: requestBody
        })
        .then((response) => {

            expect(response.status).to.eq(201)
            expect(response.body.touristName).to.eq("Mike")
            expect(response.body.tourist_Email).to.eq("john@1234.com")
            expect(response.body.location).to.eq("Paris")
        })
    })

    /// Approach 2
    it("Approaach 2", ()=> {

        const requestBody = {
            touristName : Math.random().toString(5).substring(2) ,
            tourist_Email: Math.random().toString(5).substring(2) + "@gmail.com", 
            location : "Paris"
        }
        cy.request({
            method: 'POST' , 
            url: "https://jsonplaceholder.typicode.com/posts/" ,
            body: requestBody
        })
        .then((response) => {

            expect(response.status).to.eq(201)
            expect(response.body.touristName).to.eq(requestBody.touristName)
            expect(response.body.tourist_Email).to.eq(requestBody.tourist_Email)
            expect(response.body.location).to.eq("Paris")
        })
    })

    // Dynamically use json file in fixtures
    it("Approaach 3", ()=> {

        cy.fixture('tourist').then((data)=> {
        const requestBody = data;

        

        cy.request({
            method: 'POST' , 
            url: "https://jsonplaceholder.typicode.com/posts/" ,
            body: requestBody
        })
        .then((response) => {

            expect(response.status).to.eq(201)
            expect(response.body.touristName).to.eq(requestBody.touristName)
            expect(response.body.tourist_Email).to.eq(requestBody.tourist_Email)
            expect(response.body.location).to.eq(requestBody.location)

            expect(response.body).has.property('tourist_Email', requestBody.tourist_Email)
            expect(response.body).to.have.property('tourist_Email', requestBody.tourist_Email)
        })
    })
})

})