const Ajv = require('ajv');
const ajv = new Ajv();


describe ("Json-Schema-Validation", ()=> {

    it("1st Approach", ()=> {

        cy.request({
            method: 'GET' ,
            url: 'https://fakestoreapi.com/products'
        }).then((response)=> {
            var json_schema = {
                "$schema": "http://json-schema.org/draft-07/schema#",
                "title": "Generated schema for Root",
                "type": "array",
                "items": {
                  "type": "object",
                  "properties": {
                    "id": {
                      "type": "number"
                    },
                    "title": {
                      "type": "string"
                    },
                    "price": {
                      "type": "number"
                    },
                    "description": {
                      "type": "string"
                    },
                    "category": {
                      "type": "string"
                    },
                    "image": {
                      "type": "string"
                    },
                    "rating": {
                      "type": "object",
                      "properties": {
                        "rate": {
                          "type": "number"
                        },
                        "count": {
                          "type": "number"
                        }
                      },
                      "required": [
                        "rate",
                        "count"
                      ]
                    }
                  },
                  "required": [
                    "id",
                    "title",
                    "price",
                    "description",
                    "category",
                    "image",
                    "rating"
                  ]
                }
            }//schema end
            const validate = ajv.compile(json_schema) 
            const isvalid = validate(response.body)
            expect(isvalid).to.be.true;
              
            
              
        })
    })

})