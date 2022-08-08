

describe('DELETE /characters/id', function(){

    const vampira = {
        name: 'Anna Marie',
        alias: 'Vampira',
        team: [
            'x-men'
        ],
        active: true
    }

    context('quando tenho um personagem cadastrado', function(){

        before(function(){
            cy.postCharacter(vampira).then(function(response){
                Cypress.env('characterId', response.body.character_id)
            })
        })

        it('deve remover o pesrsonagem pelo id', function(){
            const id = Cypress.env('characterId')
            cy.deleteCharacterById(id).then(function(response){
                expect(response.status).to.eql(204)
            })
        })

        after(function(){
            const id = Cypress.env('characterId')
            cy.getCharacterById(id).then(function(response){
                expect(response.status).to.eql(404)
            })
        })

    })

    it('deve retornar 404 ao remover por id não cadastrado', function(){
        const id = '62f07ab626e786537b034bc8'
        cy.deleteCharacterById(id).then(function(response){
            expect(response.status).to.eql(404)
        })
    })

})
