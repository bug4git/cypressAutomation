const { describe } = require("mocha");

describe("hooks-test", ()=>{
    before(()=>{

        cypress.log("***launch APP***")
    })
    after(()=>{

        cypress.log("***close APP***")
    })
    beforeEach(()=>{
        cypress.log("***login APP***")

    })
    afterEach(()=> {
        cypress.log("***logout APP***")

    })

    it("search", ()=> {

    })

    it("Advance-search", ()=> {
        
    })

    it("listing Products", ()=> {
        
    })

    

})