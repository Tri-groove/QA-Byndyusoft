describe('template spec', () => {
  it('passes', () => {
    cy.viewport(1920,1080)
    cy.visit('https://www.google.ru/')
    cy.get('.gLFyf').type('Byndyusoft{enter}')
    cy.get('a').invoke('removeAttr', 'target')
    cy.get('.tF2Cxc > .yuRUbf > :nth-child(1)').click()
    cy.origin('https://byndyusoft.com', () => {
      cy.get('.btn--info').click()
      cy.get('.popup-callback__contacts-tg')
        .should('have.attr', 'href')
        .and('eq', 'https://t.me/alexanderbyndyu')
    })
  })
})