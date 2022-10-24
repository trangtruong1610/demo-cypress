restClient.sendGetRequestAuth('http://localhost:3000/api/articles/' + slug_delete, token).then(Response => {
          expect(Response.status).to.equal(404)
        })