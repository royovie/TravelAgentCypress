// LoginPage.js
class Login {

    url = 'https://phptravels.net/login';
    username = 'form > :nth-child(1) > .form-group > .form-control';
    password = ':nth-child(2) > .form-group > .form-control';
    submitbtn = '.btn-box > .btn-default';
    verify = '.breadcrumb-content > .section-heading > .sec__title';
    wrong = '.message > .alert-danger';

    visit() {
        return  cy.visit(this.url); // Navigate to the login page
    }
  
    fillUsername() {
       return cy.get(this.username).click({force: true})
    }
  
    fillPassword() {
        return  cy.get(this.password).click({force: true})
    }
  
    submit() {
        return  cy.get(this.submitbtn).click({force: true}); // Click the submit button
    }

    verifyLogin(){
        return  cy.get(this.verify).should ('be.visible')
    }

    incorrect (){
        return  cy.get(this.wrong).should('contain', 'Wrong credentials. try again!')
    }
  }
  
  export default new Login();
  