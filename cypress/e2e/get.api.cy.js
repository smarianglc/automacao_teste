describe("Buscar objetos", () => { 
    it('Buscar um objeto especifico', () => {
        const id_objeto = '7'
        //fazendo a chamada
        cy.request({
            method: 'GET',
            url: 'https://api.restful-api.dev/objects/' + id_objeto + '/',
            failOnStatusCode: false
        }).as('getObjetsREsults') //dando um apelido para a chamada

        //validadndo
        cy.get('@getObjetsREsults')
            //pegando o retorno da chamada
            .then((response) => {
                expect(response.status).equal(200)
                expect(response.body.id).equal(id_objeto)
                expect(response.body.name).equal('Apple MacBook Pro 16')
                /*validando se é string*/
                expect(response.body).not.empty
                expect(response.body.data).not.empty
                /*validando se é numero */
                expect(response.body.data.year).not.string
                expect(response.body.data.year).equal(2019)

                expect(response.body.data.price).not.string
                expect(response.body.data.price).equal(1849.99)
                /*como acessar uma propriedade quando ela tem espaço no nome*/
                expect(response.body.data['CPU model']).not.empty
                expect(response.body.data['Hard disk size']).not.empty
        })
    });
});
