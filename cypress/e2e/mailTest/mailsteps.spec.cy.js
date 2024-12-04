let data

describe('testing email token extraction', () => {
  before(()=>{
    cy.fixture('selectors').then((sel) => {
      data=sel
    })
  })
  it('launch the page', () => {
    cy.visit('/')
  })
  it('click the signup for free button', ()=>{
    cy.get(data.signupForFreeButton).should('exist').click();
  })
})