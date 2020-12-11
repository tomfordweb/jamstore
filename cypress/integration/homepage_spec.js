describe('My First Test', () => {
  it('Does not do much!', () => {
    cy.visit('/');
    cy.get('.title').contains('jamstore')
  })
})
