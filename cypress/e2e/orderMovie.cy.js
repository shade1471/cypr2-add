const user = require("../fixtures/user.json");

//import cypress from "cypress";
//const admPage = require("../fixtures/adminPage.json");
//const hall = require("../fixtures/hall.json");
//const clientPage = require("../fixtures/clientPage.json");

import AdminPage from "../support/PageObjects/AdminPage";
import ClientPage from "../support/PageObjects/ClientPage";

const admPage = new AdminPage();
const clientPage = new ClientPage();

beforeEach(() => {
  cy.viewport(Cypress.env("viewportWidth"), Cypress.env("viewportHeight"));
  cy.visit("/admin");
  admPage.getHeader().should("be.visible");
  cy.login(user[0].data.login, user[0].data.password);
});

describe("Should check that movie exist", () => {
  admPage.getMovie().array.forEach((el) => {
    it("movie test", () => {
      cy.get(conf - step__movie - title).then(($movie) => {
        let movieName = $movie.text();
        cy.visit("/client");
        clientPage.getNavDayTomorrow().click();
        cy.get(".movie")
          .contains(movieName)
          .parent()
          .parent()
          .next()
          .click("left");
        cy.selectSeats(2, 1, 2, 3);
        clientPage.getOrderButton().click();
        cy.contains("Вы выбрали билеты:").should("be.visible");
      });
    });
  });

  //   let movieName = $element.text();
  //   cy.visit("/client");
  //   clientPage.getNavDayTomorrow().click();
  //   cy.get(".movie")
  //     .contains(movieName)
  //     .parent()
  //     .parent()
  //     .next()
  //     .click("left");
  //   cy.selectSeats(2, 1, 2, 3);
  //   clientPage.getOrderButton().click();
  //   cy.contains("Вы выбрали билеты:").should("be.visible");
  // })

  //     });
  //     .then(($movie) => {
  //       let movieName = $movie.text();
  //       cy.visit("/client");
  //       clientPage.getNavDayTomorrow().click();
  //       cy.get(".movie")
  //         .contains(movieName)
  //         .parent()
  //         .parent()
  //         .next()
  //         .click("left");
  //       cy.selectSeats(2, 1, 2, 3);
  //       clientPage.getOrderButton().click();
  //       cy.contains("Вы выбрали билеты:").should("be.visible");
  //     });

  // cy.log($movie.text());

  // cy.visit("/client");
  // clientPage.getNavDayTomorrow().click();

  //Поиск нужного зала и выбор первого сеанса для него
  // cy.contains(movieName).next().click("left");
  // cy.get(clientPage.orderHeader).should("contain", `${hall.name}`);
  // // Выбор ряда и мест
  // cy.selectSeats(1, 1, 2, 3);
  // cy.get(clientPage.orderButton).click();
  // cy.contains("Вы выбрали билеты:").should("be.visible");
});

// admPage.getMovie().forEach((movie) => {
//   it("Should order movie", () => {
//     admPage.getMovie().then(($movie) => {
//       let movieText = $movie.text();
//       cy.log(movieText);
//     });
//   });
// });

// hall.forEach((hall) => {
//   it(`Should order movie in '${hall.name}' hall`, () => {
//     // Проверка в админке доступности зала из fixtures
//     cy.get(admPage.hallControl).within(() => {
//       cy.contains(hall.name).should("exist");
//     });
//     cy.visit("/client");
//     cy.get(clientPage.navDayTomorrow).click();
//     // Поиск нужного зала и выбор первого сеанса для него
//     cy.contains(`${hall.name}`).next().click("left");
//     cy.get(clientPage.orderHeader).should("contain", `${hall.name}`);
//     // Выбор ряда и мест
//     cy.selectSeats(1, 1, 2, 3);
//     cy.get(clientPage.orderButton).click();
//     cy.contains("Вы выбрали билеты:").should("be.visible");
//     //Окончательное бронирование:
//     cy.get(clientPage.orderButton).click();
//     cy.get(clientPage.qrCode).should("be.visible");
//   });
// });
