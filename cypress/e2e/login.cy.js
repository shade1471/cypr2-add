const user = require("../fixtures/user.json");
import AdminPage from "../support/PageObjects/AdminPage";

const admPage = new AdminPage();

beforeEach(() => {
  cy.viewport(Cypress.env("viewportWidth"), Cypress.env("viewportHeight"));
  cy.visit("/admin");
  admPage.getHeader().should("be.visible");
});

describe("Login to admin part of service", () => {
  user.forEach((us) => {
    it.only(`Should check auth for ${us.description} user`, () => {
      cy.login(us.data.login, us.data.password);
      if (us.description === "valid") {
        admPage.getHallContol().should("be.visible");
      } else {
        cy.contains("Ошибка авторизации!").should("be.visible");
      }
    });
  });
});
