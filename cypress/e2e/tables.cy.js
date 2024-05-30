

describe ("tables-test", ()=> {

    //hooks
    beforeEach("Login", ()=>{
        cy.visit("https://demo-opencart.com/admin/index.php?route=common/login")
        cy.get("#input-username").type("demo")
        cy.get("#input-password").type("demo")
        cy.get("button[type='submit']").click();

        cy.get(".btn-close").click();
        cy.get(".parent.collapsed[href = '#collapse-5']").click();
        cy.get("#menu-customer>ul>li:first-child").click();

    })

    it("check number of rows and column", ()=> {
        cy.get("table[class='table table-bordered table-hover']>tbody>tr").should("have.length", "10");
        cy.get("table[class='table table-bordered table-hover']>thead>tr>td").should("have.length", "6");   //Assertion

    })
    it("check cell data from specific row & column", ()=> {
        cy.get("table[class='table table-bordered table-hover']>tbody>tr:nth-child(4)").contains("09/05/2024");   //Assertion

    })
    it("read all the rows and column data in first page", ()=> {
        cy.get("table[class='table table-bordered table-hover']>tbody>tr")
        .each(($row, index, $rows)=>{
            cy.wrap($row).within ( ()=> {

                cy.get("td").each( ($col, index, $cols)=> {
                    cy.log($col.text());
                })
            })

        } );   //Assertion
        
    })

    it.only("pagination", ()=> {
        let totalpages;
        /*cy.get(".col-sm-6.text-end").then( (e)=>{
            let mytext = e.text();  // showing total number pages
            totalpages = mytext.substring(mytext.indexOf("(") +1, mytext.indexOf("Pages")-1);
            cy.log("total number of pages in a table ==========>" + totalpages);
        }) */
        for (let p = 1; p<=totalpages; p++) {
            if (totalpages>1){
                cy.log ("Active page ==="+p);
                cy.get(".pagination>li:nth-child('+p+')").click()
                cy.wait(3000);


                cy.get("table[class= 'table table-bordered table-hover']>tbody>tr")
                    .each(($row, index, $rows) => {
                        cy.wrap($row).within( ()=> {
                            cy.get(".pagination>li:nth-child(4)")
                            .then((e)=>{
                                cy.log(e.text());
                            })
                        })
                    
                    })

                }
            }
        })
        
        
    })
    

