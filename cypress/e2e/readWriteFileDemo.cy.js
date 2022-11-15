

before(function() {
    cy.log('this is before')
    cy.fixture("example.json").as("test_data")
    cy.log(test_data.name)
})

it("Demo read date from fixture", ()=> {
    cy.fixture('example.json').then((data)=> {
        cy.log(data.name)
    })

    // cy.log(this.test_data.name)
})