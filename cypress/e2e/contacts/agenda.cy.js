/// <reference types="cypress" />

describe('Teste da adição de novos contatos', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Deve incluir 1 novo contato', () => {
        cy.get("input[type='text']").type("Contato de Teste")
        cy.get("input[type='email']").type("emaildeteste@email.com")
        cy.get("input[type='tel']").type("(48) 2414-2225")
        cy.get("button[type='submit']").click()
        cy.get('.sc-iAEyYk').should('contain', 'Contato de Teste')
    })

    it('Deve editar o contato', () =>{
        cy.get(':nth-child(2) > .sc-gueYoa > .edit').click()
        cy.get('[type="text"]').clear()
        cy.get('[type="text"]').type('Contato Editado')
        cy.get('[type="email"]').clear()
        cy.get('[type="email"]').type('teste@gmail.com')
        cy.get('[type="tel"]').clear()
        cy.get('[type="tel"]').type('(99) 9999-9999')
        cy.get('.alterar').click()
        cy.get('.sc-iAEyYk > :nth-child(2)').should('contain','Contato Editado')
    })

    it('Deve deletar o contato', () =>{
        cy.get(':nth-child(2) > .sc-gueYoa > .delete').click()
        cy.get('.sc-iAEyYk').should('not.contain','Contato Editado')
    })
})