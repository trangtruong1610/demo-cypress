describe('Test Login', () => {
  // it('Test Login Pass - Saucedemo', () => {
  //   cy.visit('https://www.saucedemo.com/')
  //   cy.get('#user-name').type('standard_user')
  //   cy.get('#password').type('secret_sauce')
  //   cy.get('#login-button').click()
  // })

  // it('Test Login Failed - Saucedemo', () => {
  //   cy.visit('https://www.saucedemo.com/')
  //   cy.get('#user-name').type('locked_out_user')
  //   cy.get('#password').type('secret_sauce')
  //   cy.get('#login-button').click()

  //   cy.get('.error-message-container').should('have.text', 'Epic sadface: Sorry, this user has been locked out.')
  // })

  it('Test Login Pass - herokuapp', () => {
    cy.visit('https://katalon-demo-cura.herokuapp.com/profile.php#login')
    cy.get('#txt-username').type('John Doe')
    cy.get('#txt-password').type('ThisIsNotAPassword')
    cy.get('#btn-login').click()
  })


})