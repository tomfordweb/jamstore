import * as cypressConfig from '../../cypress.json'

describe('Homepage', () => {
  it('Renders the homepage title', () => {
    cy.visit('/')
    cy.get('.title').contains('jamstore')
  })

  it('renders the link to the blog', () => {
    cy.visit('/')
    cy.get('nav.main > ul > li:nth-child(2) > a')
      .should('have.attr', 'href')
      .and('include', 'blog')
  })

  it('on clicking the link to the blog, it navigates there', () => {
    cy.visit('/')
    cy.get('nav.main > ul > li:nth-child(2) > a').click()
    cy.url().should('contain', '/blog')
  })

  it('on clicking the homepage link, it navigates to the homepage', () => {
    cy.visit('/')
    cy.get('nav.main > ul > li:nth-child(1) > a').click()
    cy.url().should('equal', `${cypressConfig.baseUrl}/`)
  })
})
