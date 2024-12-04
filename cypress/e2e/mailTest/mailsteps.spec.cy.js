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
  it('fill in the last name', ()=>{
    cy.get(data.lastnameField).should('exist').type('Otenaike');
  })
  it('fill in the email', ()=>{
    cy.get(data.emailField).should('exist').type('aramideotenaik@gmail.com');
  })
  it('fill in the password', ()=>{
    cy.get(data.passwordField).should('exist').type('Ara26!');
  })
  it('accept terms and condition', ()=>{
    cy.get(data.signupTACField).should('not.be.checked').check().should('be.checked');
  })
  
})
