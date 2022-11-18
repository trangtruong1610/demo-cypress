
import { restClient } from "../support/restClient";

describe("API testing of restful herokuapp App", ()=> {
    let token;
    beforeEach( ()=> {
      cy.loginToApplication('admin', 'password123')
      token = Cypress.env('token')
      cy.log(token)
    })
    it("GET all booking ID", ()=> {
      restClient.sendGetRequest('https://restful-booker.herokuapp.com/booking')
      .then(Response => {
        expect(Response.status).to.equal(200)
      })
    })

    //testcase GET booking detail

    let bookingId;
    it("Booking - CreateBooking", ()=> {
      let body = {
        "firstname" : "Jim",
        "lastname" : "Brown",
        "totalprice" : 111,
        "depositpaid" : true,
        "bookingdates" : {
            "checkin" : "2018-01-01",
            "checkout" : "2019-01-01"
        },
        "additionalneeds" : "Breakfast"
    }
      restClient.sendPostRequesNoAuth('https://restful-booker.herokuapp.com/booking', body)
      .then(Response => {
        expect(Response.status).to.equal(200)
        expect(Response.body.booking.firstname).to.equal('Jim')
        bookingId = Response.body.bookingid
        cy.log("create booking ID")
        cy.log(bookingId)
      })
    })


    it("GET booking detail", ()=> {
      restClient.sendGetRequest('https://restful-booker.herokuapp.com/booking/' + bookingId)
      .then(Response => {
        expect(Response.status).to.equal(200)
        expect(Response.body.firstname).to.equal('Jim')
        cy.log(JSON.stringify(Response.body))
      })


    })

    it("Booking - CreateBooking", ()=> {
      let body = {
        "firstname" : "Jim",
        "lastname" : "Brown",
        "totalprice" : 111,
        "depositpaid" : true,
        "bookingdates" : {
            "checkin" : "2018-01-01",
            "checkout" : "2019-01-01"
        },
        "additionalneeds" : "Breakfast"
    }
      restClient.sendPostRequesNoAuth('https://restful-booker.herokuapp.com/booking', body)
      .then(Response => {
        expect(Response.status).to.equal(200)
        expect(Response.body.booking.firstname).to.equal('Jim')
      })
    })

    it("Booking - UpdateBooking", ()=> {
      let body = {
        "firstname" : "Trang",
        "lastname" : "Brown",
        "totalprice" : 111,
        "depositpaid" : true,
        "bookingdates" : {
            "checkin" : "2018-01-01",
            "checkout" : "2019-01-01"
        },
        "additionalneeds" : "Breakfast"
    }
      restClient.sendPutRequestNoAuth('https://restful-booker.herokuapp.com/booking/' + bookingId, token, body)
      .then(Response => {
        expect(Response.status).to.equal(200)
        expect(Response.body.firstname).to.equal("Trang")
      })
    })
  })