

before(function() {

    cy.log('this is before')
    cy.fixture("example.json").as("test_data").then((test_data)=>{
        cy.log(test_data.name)
    })

})

it("Demo read data from fixture", function() {
    cy.fixture('example.json').as('data').then((data)=> {
        cy.log(data.email)
    })

    cy.log(this.test_data.body)

})

it("Demo read file using readFile()", function(){
    cy.readFile('./cypress/fixtures/example.json').then((data)=> {
        cy.log(data.demo_readFile)
    })
})

it("Demo write file", function(){
    cy.writeFile('sample.txt', 'this is demo write file with cypress !!!\n')
    cy.writeFile('sample.txt', 'write another line', {flag: 'a+'})

})




