// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

const {mailSlurp, default: MailSlurp} = require('mailslurp-client')
// const mailslurp = new MailSlurp({apiKey: Cypress.env('MAIL_SLURP_API_KEY')})
const mailslurp = new MailSlurp({ apiKey: "904106afcb038e27c2d7a4e9fba2fdde07e887037f52d040d304c67bf421e061" });


Cypress.Commands.add('createInbox', ()=>{
    return mailslurp.createInbox()
})

const timeoutMillis = 30000;

Cypress.Commands.add('waitForLatestEmail', (inboxId) => {
  return mailslurp.waitForLatestEmail(inboxId, timeoutMillis);
});


// Cypress.Commands.add('waitForLatestEmail', (inboxId)=>{
//     return mailslurp.waitForLatestEmail(inboxId, timeoutMillis)
// })