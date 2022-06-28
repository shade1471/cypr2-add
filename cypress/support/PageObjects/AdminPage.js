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

  getMovieList() {
    return cy.get(".conf-step__movies");
  }

  getMovie() {
    return cy.get(".conf-step__movie-title");
  }
}

export default AdminPage;
