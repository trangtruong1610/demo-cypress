

it("upload file", ()=> {
    cy.visit('https://trytestingthis.netlify.app/')
    cy.get('#myfile').attachFile('example.json')
})

it("download file", ()=> {
    cy.downloadFile('https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg','./cypress/downloads','fileDownloaded.jpg')
})