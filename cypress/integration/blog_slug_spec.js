describe('blog slug', () => {
  let url = '/blog/integration-test'
  it('can render the testing page title', () => {
    cy.visit(url)
    cy.get('h1').contains('Cypress Test Subject')
  })
  it('can render the testing page content', () => {
    cy.visit(url)
    cy.get('article').contains('Cypress')
  })
  it('renders a breadcrumb to the homepage', () => {
    cy.visit(url)
    cy.get('.breadcrumbs > li:nth-child(1) > a')
      .should('have.attr', 'href')
      .and('equal', '/')
  })
  it('renders a breadcrumb to the blog index', () => {
    cy.visit(url)
    cy.log('test')
    cy.get('.breadcrumbs li:nth-child(2) > a')
      .should('have.attr', 'href')
      .and('include', '/blog')
  })

  it('renders the current page, however it is not a clickable link', () => {
    cy.visit(url)
    cy.get('.breadcrumbs li:nth-child(3) > a')
      .should('have.attr', 'href')
      .and('equal', '/blog/integration-test')
  })
})
