describe('Login Page', () => {

beforeEach(() => {

cy.visit('https://phptravels.net/login')

})
  it('valid ID and Password', () => {

    cy.get('form > :nth-child(1) > .form-group > .form-control').click({force: true})
    .type ('agent@phptravels.com')

    cy.get(':nth-child(2) > .form-group > .form-control').click({force: true})
    .type('demoagent')

    cy.get('.btn-box > .btn-default').click({force: true})
    cy.get('.breadcrumb-content > .section-heading > .sec__title').should ('be.visible')
    cy.get('#cookie_stop').click()
  })
  it('invalid ID and Password', () => {

      cy.get('form > :nth-child(1) > .form-group > .form-control').click({force: true})
      .type ('agent@phptravels.com')

      cy.get(':nth-child(2) > .form-group > .form-control').click({force: true})
      .type('realagent')

      cy.get('.btn-box > .btn-default').click({force: true})
    cy.get('.message > .alert-danger').should('contain', 'Wrong credentials. try again!')
      cy.url().should('contain','https://phptravels.net/login/failed')
    })

})