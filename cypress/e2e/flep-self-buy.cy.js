import {HomePage} from "../e2e/pages/venta/homePage"

const homePage = new HomePage()

// describe('self-buy flep on venta', ()=> {
//     it.only('Self-buy flep gojek', ()=> {
//         homePage.openUrl('https://app-release.gigacover.com/sg/flep/quote')
//         homePage.chooseGojekIcon()
//         homePage.clickNextBtn()
//         homePage.inputDob('1993')
//         homePage.clickNextBtn()
//         homePage.clickCheckBox()
//         homePage.clickNextBtn()
//         homePage.inputPersonalInfo('S0010617H', '80010617')
//         homePage.clickAllCheckbox()
//         homePage.clickNextBtn()
//         homePage.click_pay_btn()
//         homePage.stripeCheckout()
//         cy.wait(10000)
//     })

//     it.only('Self-buy flep not gojek', ()=> {
//         homePage.openUrl('https://app-release.gigacover.com/sg/flep/quote')
//         homePage.chooseNotGojek()
//         homePage.clickNextBtn()
//         homePage.choose_indoor_environment()
//         homePage.choose_public_transport()
//         homePage.inputDob('1993')
//         homePage.clickNextBtn()
//         homePage.clickCheckBox()
//         homePage.clickNextBtn()
//         homePage.inputPersonalInfo('S3117583F', '83117583')
//         homePage.clickAllCheckbox()
//         homePage.clickNextBtn()
//         homePage.click_pay_btn()
//         homePage.stripeCheckout()
//         cy.wait(10000)
//     })

// })

it("command code for now", ()=> {
    cy.log("I'll command code for now")
})