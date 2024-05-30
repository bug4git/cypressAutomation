const xml2js = require('xml2js');
const parser = xml2js.Parser({explisitArray: false}); 

describe("XML PArsing", ()=> {
let petid = null;
    const xmlPayload = 
    "<pet> <id>09</id> <name>Pommy</name> <category><id>1</id><name>Cats</name></category> <photoUrls><photoUrl>string</photoUrl></photoUrls> <tags><tag><id>0</id><name>string</name></tag></tags><status>available</status></pet>" 

    it ("creating Pet", ()=> {

        cy.request({
            method: 'POST' ,
            url: "https://petstore3.swagger.io/api/v3/pet" ,
            body: xmlPayload , 
            headers: {'Content-Type' : 'application/xml' , 'accept': 'application/xml'}

        }).then((response)=> {
            expect(response.status).to.eq(200);
            parser.parseString(response.body, (err, result)=>{
                petid = result.Pet.id;
            })
        })

    })

    it ("creating Pet data-parsing xml response", ()=> {

        cy.request({
            method: 'GET' ,
            url: "https://petstore3.swagger.io/api/v3/pet/9" ,
            //body: xmlPayload , 
            headers: {'accept': 'application/xml'}

        }).then((response)=> {
            expect(response.status).to.eq(200);
            parser.parseString(response.body, (err, result)=>{
                if (err) {
                    throw new Error('Error parsing XML');
                }
                expect(result.Pet.id).equal(petid)
                expect(result.Pet.name).equal("Pommy")
            })
        })

    })
})