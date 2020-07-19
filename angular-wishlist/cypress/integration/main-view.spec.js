describe('ventana principal', () => {
    it('tiene encabezado correcto y en espanol por defecto', () => {
    cy.visit('http://localhost:4200');
    cy.contains('angular-wishlist');
    cy.get('h1 b').should('contain', 'HOLA es');
    cy.get('#nombre')
    .type('Santa Marta').should('have.value', 'Santa Marta');
    cy.get('#imagenUrl')
    .type('www.SantaMarta.com').should('have.value', 'www.SantaMarta.com');
    cy.get('button[type=submit]').click();

    cy.get('#nombre')
    .clear()
    .type('Taganga').should('have.value', 'Taganga');
    cy.get('#imagenUrl').clear()
    .type('www.Taganga.com').should('have.value', 'www.Taganga.com');
    cy.get('button[type=submit]').click();
    });
})