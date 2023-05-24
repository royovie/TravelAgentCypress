/// <reference types= "cypress" />
const data=require('../fixtures/data.json')
import Login from '../pageObjects/Login';

const username = data.Login.username;
const password = data.Login.password;
const invalidUsername = data.Login.invalidUsername;
const invalidPassword = data.Login.invalidPassword;
describe('Login Page', () => {

beforeEach(() => {

  Login.visit(); // Navigate to the login page before each test

})
it('should successfully log in', () => {
  Login.fillUsername().type(username); // Enter the username;
  Login.fillPassword().type (password); // Enter the password
  Login.submit();
  Login.verifyLogin();// Add assertions
  cy.get('#cookie_stop').click()
  })
  it('invalid ID and Password', () => {

    Login.fillUsername().type(invalidUsername); // Enter the invalidusername;
    Login.fillPassword().type (invalidPassword); // Enter the invalidpassword
    Login.submit();
   Login.incorrect();
     
    })

})