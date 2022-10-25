export class LoginPage{

    username_input = '[name="username"]'
    password_input = '[name="password"]'
    login_btn = ' Login '

    openUrl(url){
        cy.visit(url)
    }

    enterUsername(username){
        cy.get(this.username_input).type(username)
    }

    enterPassword(password){
        cy.get(this.password_input).type(password)
    }

    clickLogin(){
        cy.contains(this.login_btn).click()
    }
}