import * as cypressConfig from '../../cypress.json'
import * as appConfig from '../../nuxt.config'
describe('Homepage', () => {
  it('the logo is the app name', () => {
    cy.visit('/')
    cy.get('#logo').should('contain', appConfig.publicRuntimeConfig.appTitle)
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
