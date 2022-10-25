import {LoginPage} from "../e2e/pages/loginPage"

const loginPage = new LoginPage()

describe('Login Test Suite', ()=> {
    it.only('Login Test Pass', ()=> {
        loginPage.openUrl('https://opensource-demo.orangehrmlive.com/')
        loginPage.enterUsername('Admin')
        loginPage.enterPassword('admin123')
        loginPage.clickLogin()
        cy.get('[alt="profile picture"]').should('be.visible')
    })

    it.skip('Login Test Fail', ()=> {
        loginPage.openUrl('https://opensource-demo.orangehrmlive.com/')
        loginPage.enterUsername('Admin')
        loginPage.enterPassword('wrondPassword')
        loginPage.clickLogin()
        cy.contains('Invalid credentials').should('be.visible')

    })
})
