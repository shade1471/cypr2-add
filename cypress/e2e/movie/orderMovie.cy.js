import AdminPage from "../../support/PageObjects/AdminPage";
import ClientPage from "../../support/PageObjects/ClientPage";

const user = require("../../fixtures/user.json");

const admPage = new AdminPage();
const clientPage = new ClientPage();
const arrMovie = [];

before(() => {
  cy.viewport(Cypress.env("viewportWidth"), Cypress.env("viewportHeight"));
  cy.visit("/admin");
  admPage.getHeader().should("be.visible");
  cy.login(user[0].data.login, user[0].data.password);
  admPage.getMovieArr().each(($movie) => {
    arrMovie.push($movie.text());
  });
  cy.log(arrMovie);
});

it(`Should console log my array ${arrMovie}`, () => {
  //Тут работает
  cy.log(arrMovie);
});

//Тут не работает
arrMovie.forEach((movie) => {
  it(`Should book ${movie}`, () => {
    cy.visit("/client");
  });
});

// it("Should order tickets for exist movie", () => {
//   //Получение фильма с админки в расписание показа
//   admPage
//     .getMovieSeance()
//     .eq(0)
//     .then(($title) => {
//       //Бронь фильма по найденному названию
//       cy.visit("/client");
//       clientPage.getNavDayTomorrow().click();
//       clientPage.checkFirstSeanceByName($title.text());
//       cy.selectSeats(3, 1, 2, 3);
//       clientPage.getOrderButton().click();
//       cy.contains("Вы выбрали билеты:").should("be.visible");
//       //Окончательное бронирование:
//       // clientPage.getOrderButton().click();
//       // clientPage.getQrCode().should("be.visible");
//     });
// });
