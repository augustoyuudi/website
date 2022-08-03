describe('Main page', () => {
  it('should render correctly', () => {
    cy.visit('/')
    cy.contains('Augusto Y. Shiraishi').should('be.visible')
    cy.get('p > a').should('have.attr', 'href', 'https://deliverymuch.com.br/')
    cy.get('span > img').should('not.have.attr', 'src', '#undefined')
    cy.contains('Github').should('have.attr', 'href', 'https://github.com/augustoyuudi')
    cy.contains('Linkedin').should('have.attr', 'href', 'https://www.linkedin.com/in/augustoyuudi/')
    cy.contains('potaku').should('have.attr', 'href', 'https://github.com/augustoyuudi/potaku')
    cy.contains('starwars-pwa').should('be.visible')
  })
})