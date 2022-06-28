class AdminPage {
  getEmailField() {
    return cy.get("[type=email]");
  }

  getPasswField() {
    return cy.get("[type=password]");
  }

  getLogInButton() {
    return cy.get(".login__button");
  }

  getHallContol() {
    return cy.get("#hall-control");
  }

  getGridSession() {
    return cy.get("#grid-session");
  }

  getHeader() {
    return cy.get(".page-header__subtitle");
  }

  getMovieSeance() {
    return cy.get(".conf-step__seances-movie-title");
  }
}

export default AdminPage;
