export class HomePage{

    buy_flep_btn = '//*[text()="Freelancer Earnings Protection"]/following-sibling::button'
    buy_flep_now_btn = '//*[text()="BUY FLEP NOW"]'
    gojek_icon = '//img[contains(@src,"gojek")]/../../button '
    not_gojek_icon = '//*[text()="No, I don’t"]'
    next_btn = '//*[text()="NEXT"]'
    dob = '//*[text()="What is Your Date of Birth?"]/following-sibling::div[1]'
    date_picker_year = '//*[contains(@class, "MuiPickersToolbarButton-toolbarBtn")][1]'
    start_date = '//*[@class="gc-datepicker-custom"]'
    ok_btn = '//*[text()="OK"]'
    check_box = '//*[contains(text(),"I, the proposed insured")]/../button'
    fname = '//*[@name="first_name"]'
    lname = '//*[@name="last_name"]'
    nricfin = '//*[@name="nricfin"]'
    mobile = '//*[@name="mobile"]'
    postalcode = '//*[@name="postalcode"]'
    email = '//*[@name="email"]'
    address = '//*[@name="address1"]'
    postalcode = '//*[@name="postalcode"]'
    checkbox_confirm = '//*[contains(text(),"Yes, I confirm")]/../../div[1]'
    checkbox_understand = '//*[contains(text(),"I understand")]/../../div[1]'
    pay_now_btn = '//*[text()="PAYNOW"]'
    pay_securely_now_btn = '//*[text()="PAY SECURELY NOW"]'

    iframe = '//*[@name="stripe_checkout_app"]'
    card_number = '//*[@id="card_number"]'
    card_date = '//*[@id="cc-exp"]'
    card_csc = '//*[@id="cc-csc"]'
    pay_btn = '//*[@id="submitButton"]'

    indoor_btn = '//*[text()="Indoor "]/../../button'


    openUrl(url){
        cy.visit(url, {log: false})
    }

    chooseGojekIcon(){
        cy.xpath(this.gojek_icon).click()
    }

    clickNextBtn(){
        cy.xpath(this.next_btn).click()
    }

    chooseNotGojek(){
        cy.xpath(this.not_gojek_icon).click()
    }

    inputDob(year){
        cy.xpath(this.dob).click()
        cy.xpath(this.date_picker_year).click()
        cy.xpath('//*[text()="'+year+'"]').click()
        cy.xpath(this.ok_btn).click()
    }

    clickCheckBox(){
        cy.xpath(this.check_box).click()
    }

    inputPersonalInfo(nric, mobile){
        cy.xpath(this.fname).type('first name')
        cy.xpath(this.lname).type('last name')
        cy.xpath(this.nricfin).type(nric)
        cy.xpath(this.mobile).type(mobile)
        cy.xpath(this.email).type(''+nric+'@gigacover.com')
        cy.xpath(this.address).type('address')
        cy.xpath(this.postalcode).type('123123')
    }

    clickAllCheckbox(){
        cy.xpath(this.checkbox_confirm).click()
        cy.xpath(this.checkbox_understand).click()
    }

    choose_indoor_environment(){
        cy.xpath(this.indoor_btn).click()
        this.clickNextBtn()
    }

    choose_public_transport(){
        cy.xpath('//*[text()="Motorcycle"]/../button').click()
        this.clickNextBtn()
    }

    click_pay_btn(){
        cy.wait(5000)
        cy.xpath(this.pay_now_btn).click()
    }
    stripeCheckout(){
        cy.frameLoaded('.stripe_checkout_app')
        cy.iframe('.stripe_checkout_app').find('#card_number').should('be.visible').type('4242424242424242')
        cy.iframe('.stripe_checkout_app').find('#cc-exp').should('be.visible').type('1125')
        cy.iframe('.stripe_checkout_app').find('#cc-csc').should('be.visible').type('123')
        cy.iframe('.stripe_checkout_app').find('#submitButton').should('be.visible').click()

        // cy.xpath(this.card_number).type('4242424242424242')
        // cy.xpath(this.card_date).type('1125')
        // cy.xpath(this.card_csc).type('124')
        // cy.xpath(this.pay_btn).click()
    }
}