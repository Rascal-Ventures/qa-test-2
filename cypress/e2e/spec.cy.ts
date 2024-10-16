describe('qa-test-2 Happy Path scenario', () => {
  it('loads the page correctly', () => {
    cy.visit('http://localhost:8081/')
    cy.contains('See 9 more frames').click()  
    cy.contains('Dismiss').click()  
  })
})