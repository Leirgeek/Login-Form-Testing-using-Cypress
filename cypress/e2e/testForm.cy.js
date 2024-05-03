 describe('visit the website signup page', () => {
   beforeEach(() => {
     // Since we want to visit the same URL at the start of all our tests,
     cy.visit('https://automationexercise.com/login');
   });


   it('Should Login with valid Email and password', () => {
     // We'll store our item text in a variable so we can reuse it
     const email = 'chege@gmail.com';
     const password = '1234';

     cy.get('[data-qa="login-email"]').type(`${email}{enter}`);
     cy.get('[data-qa="login-password"]').type(`${password}{enter}`);

     cy.get('[data-qa="login-button"]').click();

     cy.get('[data-qa="logout"]').click();
   });

   it('Display an error on Login with invalid Email and valid password', () => {
     // We'll store our item text in a variable so we can reuse it
     const email = 'cheg@gmail.com';
     const password = '1234';

     cy.get('[data-qa="login-email"]').type(`${email}{enter}`);
     cy.get('[data-qa="login-password"]').type(`${password}{enter}`);
     cy.get('[data-qa="login-button"]').click();
     cy.get('p').contains('Your email or password is incorrect!').should('exist');
   });

   it('Login with invalid password and valid email', () => {
     // We'll store our item text in a variable so we can reuse it
     const email = 'chege@gmail.com';
     const password = '1234';

     cy.get('[data-qa="login-email"]').type(`${email}{enter}`);
     cy.get('[data-qa="login-password"]').type(`${password}{enter}`);
     cy.get('[data-qa="login-button"]').click();
     cy.get('p').contains('Your email or password is incorrect!').should('exist');
   });

   it('should display an error on Login with invalid password and invalid email', () => {
     // We'll store our item text in a variable so we can reuse it
     const email = 'chegee@gmail.com';
     const password = '12345';

     cy.get('[data-qa="login-email"]').type(`${email}{enter}`);
     cy.get('[data-qa="login-password"]').type(`${password}{enter}`);
     cy.get('[data-qa="login-button"]').click();
     cy.get('p').contains('Your email or password is incorrect!').should('exist');
   });
 });
