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

  it('signup as a talent', () => {
    cy.get(data.signupAsATalentButton).eq(0).should('exist').click();
  })
  it('fill in the first name', ()=>{
    cy.get(data.firstnameField).should('exist').type('Aramide');
  })
  
})
