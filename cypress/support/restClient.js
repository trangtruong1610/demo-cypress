export class RestClient{

    sendGetRequest(apiUrl){
        return cy.request({
            method : 'GET',
            url : apiUrl
          })
    }

    sendGetRequestAuth(apiUrl, token){
        return cy.request({
            method : 'GET',
            url : apiUrl,
            headers: {
                "Authorization": "Token " + token
            }
          })
    }


    sendPostRequest(apiUrl, token, body){
        return cy.request({
            method: 'POST',
            url: apiUrl,
            headers: {
              "Authorization": "Token " + token
            },
            body: body
          })
    }

    sendPutRequest(apiUrl, token, body){
        return cy.request({
            method: 'PUT',
            url : apiUrl,
            headers: {
                "Authorization": "Token " + token
            },
            body : body
        })
    }

    sendDeleteRequest(apiUrl, token){
        return cy.request({
            method: 'DELETE',
            url: apiUrl,
            headers: {
                "Authorization": "Token " + token
            },
        })
    }

}

export const restClient = new RestClient();
