describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:5173/')
    cy.get('h1').should('contain', 'News Website')
    cy.get('button').should('contain', 'log in')
  })
})