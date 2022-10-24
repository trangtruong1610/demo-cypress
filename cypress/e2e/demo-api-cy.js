/// <reference types="cypress"/>
// const { before } = require("cypress/types/lodash");

describe("API testing of Conduit App", ()=> {
    let token;
    beforeEach( ()=> {
      cy.request({
        method: 'POST',
        url: 'http://localhost:3000/api/users/login',
        body: {"user":{"email":"trangtruong@gmail.com","password":"trangtruong"}}
      }).then(Response => {
        expect(Response.status).to.equal(200)
        token = Response.body.user.token
        cy.log(token)
        cy.log("Login to get token")
      })
    })
    it("GET Tags API", ()=> {
      cy.request({
        method : 'GET',
        url : 'http://localhost:3000/api/tags'
      }).then(Response => {
        cy.log(JSON.stringify(Response))
        expect(Response.status).to.equal(200)
        expect(Response.body.tags).to.contain("cypress")
        expect(Response.statusText).to.equal("OK")
        cy.log("Get tags API")
      })
    })
    it("Add articles", ()=> {
      cy.request({
        method: 'POST',
        url: 'http://localhost:3000/api/articles',
        headers: {
          "Authorization": "Token " + token
        },
        body: {
          "article": {
              "title": "cypress articles 111",
              "description": "this is regarding cypress",
              "body": "cypress is a test automation tool",
              "tagList": [
                  "test"
              ]
          }
        }
      }).then(Response => {
        expect(Response.status).to.equal(200)
        cy.log("Add new article")
      })
    })
    it("Update Article - PUT", ()=> {
      let slug;

      cy.request({
        method: 'GET',
        url: 'http://localhost:3000/api/articles',
        headers: {
          "Authorization": "Token " + token
        },
      }).then(Response => {
        expect(Response.status).to.equal(200)
        slug = Response.body.articles[2].slug
        cy.log(slug)
        cy.request({
          method: 'PUT',
          url: 'http://localhost:3000/api/articles/' + slug,
          headers: {
            "Authorization": "Token " + token
          },
          body: {
            "article": {
                "title": "edit cypress articles - existed article",
                "description": "this is regarding cypress",
                "body": "cypress is a test automation tool",
                "tagList": [
                    "test"
                ]
            }
          }
        })
      })

    })
    it("POST and PUT article", ()=> {
      let slug_post;
      cy.request({
        method: 'POST',
        url: 'http://localhost:3000/api/articles',
        headers: {
          "Authorization": "Token " + token
        },
        body: {
          "article": {
              "title": "cypress articles slug post",
              "description": "this is regarding cypress",
              "body": "cypress is a test automation tool",
              "tagList": [
                  "test"
              ]
          }
        }
      }).then(Response => {
        expect(Response.status).to.equal(200)
        slug_post = Response.body.article.slug
        cy.log("create slug post: " + slug_post)

        cy.request({
          method: 'PUT',
          url: 'http://localhost:3000/api/articles/' + slug_post,
          headers: {
            "Authorization": "Token " + token
          },
          body: {
            "article": {
                "title": "edit cypress articles slug post",
                "description": "this is regarding cypress",
                "body": "cypress is a test automation tool",
                "tagList": [
                    "test"
                ]
            }
          }
        })
      })
    })
  })