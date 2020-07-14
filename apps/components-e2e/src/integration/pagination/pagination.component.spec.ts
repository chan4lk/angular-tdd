describe('components', () => {
  beforeEach(() => cy.visit('/iframe.html?id=paginationcomponent--primary'));

  it('should render the component', () => {
    cy.get('angular-tdd-pagination').should('exist');
  });
});
