describe('My First Suit ', () => {
  //it('test1', function() {//steps})
  it('test 1 - positive', () => {
    //steps
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    cy.title().should('eq','OrangeHRM')
    
  })

  it('test 2 - Negative', () => {
    //steps
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    cy.title().should('eq','OrangeHRM')
    
  })
})