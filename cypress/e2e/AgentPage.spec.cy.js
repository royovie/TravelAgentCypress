describe('Agent Page', () => {

beforeEach(() => {

    cy.visit('https://phptravels.net/login')
    cy.get('form > :nth-child(1) > .form-group > .form-control').click({force: true})
               .type ('agent@phptravels.com')

               cy.get(':nth-child(2) > .form-group > .form-control').click({force: true})
               .type('demoagent')

               cy.get('.btn-box > .btn-default').click({force: true})
               cy.get('.breadcrumb-content > .section-heading > .sec__title').should ('be.visible')
               cy.get('#cookie_stop').click()
    })
    it('View Dashboard', () => {
    cy.get('.breadcrumb-content > .section-heading > .sec__title').should ('be.visible')
    cy.contains('Wallet Balance').should ('be.visible')
    cy.contains('Total Bookings').should ('be.visible')
    cy.contains('Pending Invoices').should('be.visible')
    cy.contains('Reviews').should('be.visible')
    })

    it('View Booking', () => {
    cy.contains('My Bookings').click({force:true})
    cy.get('.form-title-wrap').should ('be.visible')
    })

     it('Add Fund', () => {
    cy.contains('Add Funds').click({force:true})
    cy.get('#gateway_stripe').click()
    cy.get('.col-md-12 > .form-group > .form-control').click({force:true}).clear().type('100')
    cy.contains('Pay Now').click()
   // cy.get('.pay').click()
    //cy.get('#cardNumber').type('4242424242424242')
    cy.get('.btn-front').click()
    cy.get('.yes').click()
    cy.url().should('contain','https://phptravels.net/account/add_funds')
      })

    it('My Profile', () =>{
    cy.contains('My Profile').click({force:true})
    cy.get('.form-content').should ('be.visible')

    })

    it.only('Logout',()=>{
    cy.contains('Logout').click({force:true})
     cy.url().should('contain','https://phptravels.net/login')
    })
 })
