describe('Sauce Demo Testing', () => {


        // Log in test with wrong credentials

     it('Login with wrong credentials - Login with correct credentials - Add item to cart - Empty cart - Item details page - Back to products button - Purhase item - Open and close menu - Logout' , () => {
        cy.visit('https://www.saucedemo.com/');

        cy.get('[data-test="username"]').type('erroruser');
        cy.get('[data-test="password"]').type('password123');
        cy.get('[data-test="login-button"]').click();
        cy.get('[data-test="error"]').should('exist');
        
        //Log In test with correct credentials

        cy.visit('https://www.saucedemo.com/');     
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
        cy.url().should('include', '/inventory');
        
        // Add item to cart

        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        cy.get('.shopping_cart_link').click();
        cy.get('.inventory_item_name').should('have.text', 'Sauce Labs Backpack');

        // Empty cart

        cy.get('[data-test="remove-sauce-labs-backpack"]').click(); 
        cy.get('.inventory_item_name').should('not.exist');

        // Item details page 

        cy.get('[data-test="continue-shopping"]').click();
        cy.get('#item_4_title_link').click()
        cy.url().should('include', '/inventory-item');
        cy.get('.inventory_details_name').should('be.visible');
        cy.get('.inventory_details_desc').should('be.visible');
        cy.get('.inventory_details_price').should('be.visible');

        // Back to products button 

        cy.get('[data-test="back-to-products"]').click();
        cy.url().should('include', '/inventory');
        cy.get('.header_secondary_container').should('exist');
        cy.get('[data-test="product_sort_container"]').should('have.class', 'product_sort_container');

        //Purhase item 

        cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click();
        cy.get('.shopping_cart_link').click();
        cy.get('[data-test="checkout"]').click();
        cy.get('[data-test="firstName"]').type('Andrew');
        cy.get('[data-test="lastName"]').type('Alftonso');
        cy.get('[data-test="postalCode"]').type('58971');
        cy.get('[data-test="continue"]').click();
        cy.get('[data-test="finish"]').click();
        cy.contains('.complete-header', 'Thank you for your order!').should('be.visible');


        // Open and close menu test

        cy.get('[data-test="back-to-products"]').click();
        cy.get('#react-burger-menu-btn').click();
        cy.get('.bm-menu').should('exist');
        cy.get('#react-burger-cross-btn').click();
        cy.get('#react-burger-menu-btn').should('exist');

        // Logout

        cy.get('#react-burger-menu-btn').click();
        cy.get('#logout_sidebar_link').click();
        cy.get('#login_credentials').should('exist');

                
    })

 
})