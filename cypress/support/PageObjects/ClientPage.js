class ClientPage {
  getHeader() {
    return cy.get(".page-header__title");
  }

  getNavMenu() {
    return cy.get(".page-nav");
  }

  getNavDayTomorrow() {
    return cy.get("a.page-nav__day:nth-of-type(2)");
  }

  getMovieHall() {
    return cy.get(".movie-seances__hall");
  }

  getMovieTime() {
    return cy.get(".movie-seances__time");
  }

  getOrderHeader() {
    return cy.get(".buying__info-hall");
  }

  getOrderButton() {
    return cy.get(".acceptin-button");
  }

  getQrCode() {
    return cy.get(".ticket__info-qr");
  }

  getFirstSeanceByName(name) {
    cy.get(".movie").contains(name).parent().parent().next().click("left");
  }
}

export default ClientPage;
