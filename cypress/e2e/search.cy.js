describe('template spec', () => {

  const baseUrl = 'https://blog.agibank.com.br/'

  beforeEach(() => {
    cy.viewport(1440, 900)
    cy.visit(baseUrl)
  })

  it.only('Pesquisar termo existente', () => {
    cy.get('[aria-label="Search icon link"]', {timeout: 10000})
      .should('be.visible')
      .filter(':visible')
      .click({ force: true })

    cy.get('input[placeholder="Digite sua busca"]')
      .type('imposto de renda{enter}')

    cy.get('.post-item')
      .should('have.length.greaterThan', 0)
  })

  it('Pesquisar termo inexistente', () => {
    cy.get('[aria-label="Search icon link"]')
      .should('be.visible')
      .filter(':visible')
      .click()

    cy.get('input[placeholder="Digite sua busca"]')
      .type('termoInexistente123{enter}')

    cy.get('.post-item')
      .should('have.length.greaterThan', 0)
  })


})