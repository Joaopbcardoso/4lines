describe('Testes de Cadastro e Login', () => {
  
  context('Login para Administrador', () => {
    
    it('Deve carregar a página de Login para Admin', () => {
      cy.visit('/log-adm');  
      cy.get('form').within(() => {
        cy.get('input[name="user"]').should('be.visible');
        cy.get('input[name="senha"]').should('be.visible');
      });
    });

    it('Deve fazer login de admin com sucesso', () => {
      cy.visit('/log-adm');  
      cy.get('input[name="user"]').type('adminTeste');
      cy.get('input[name="senha"]').type('admin123');
      cy.get('input[type="submit"]').click();
      cy.url().should('include', '/HomeAdm');  
    });

  });

  context('Cadastro para Administrador', () => {

    it('Deve carregar a página de Cadastro de Admin', () => {
      cy.visit('/CadastroAdm'); 
      cy.get('form').within(() => {
        cy.get('input[name="user"]').should('be.visible');
        cy.get('input[name="email"]').should('be.visible');
        cy.get('input[name="senha"]').should('be.visible');
        cy.get('input[name="senha2"]').should('be.visible');
      });
    });

    it('Deve submeter o formulário de Cadastro de Admin corretamente', () => {
      cy.visit('/CadastroAdm');  
      cy.get('input[name="user"]').type('adminTeste');
      cy.get('input[name="email"]').type('admin@teste.com');
      cy.get('input[name="senha"]').type('admin123');
      cy.get('input[name="senha2"]').type('admin123');
      cy.get('input[type="submit"]').click();
      cy.url().should('include', '/log-adm'); 
    });

  });

  context('Home', () => {
  
    it('Deve carregar a página Home após login do usuário comum', () => {
      cy.visit('/Home'); 
      cy.get('header').should('exist');
    });

    it('Deve carregar a página HomeAdm após login do admin', () => {
      cy.visit('/HomeAdm'); 
      cy.get('header').should('exist');
    });

  });

});
