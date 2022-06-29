//const admPage = require("../fixtures/adminPage.json");
//import cypress from "cypress";
import AdminPage from "../support/PageObjects/AdminPage";
const admPage = new AdminPage();

Cypress.Commands.add("login", (login, password) => {
  admPage.getEmailField().type(login);
  admPage.getPasswField().type(password);
  admPage.getLogInButton().click();
});

Cypress.Commands.add("selectSeats", (row, ...seats) => {
  for (let i = 0; i < seats.length; i++) {
    cy.get(
      `div.buying-scheme__wrapper > div:nth-child(${row}) > span:nth-child(${seats[i]})`
    ).click();
    cy.get(
      `div.buying-scheme__wrapper > div:nth-child(${row}) > span:nth-child(${seats[i]}).buying-scheme__chair_selected`
    ).should("exist");
  }
});

Cypress.Commands.add("addUser", (body) => {
  cy.request("POST", "/user", body).should((response) => {
    expect(response.status).eq(200);
  });
});

Cypress.Commands.add("apiLogIn", (body) => {
  cy.request(
    "GET",
    `/user/login?username=${body.username}&password=${body.password}`
  ).should((response) => {
    expect(response.status).eq(200);
  });
});

Cypress.Commands.add("deleteUser", (userName) => {
  cy.request("DELETE", `/user/${userName}`).should((response) => {
    expect(response.status).to.eq(200);
  });
});

Cypress.Commands.add("getUser", (userName) => {
  cy.request({
    url: `/user/${userName}`,
    failOnStatusCode: false,
  });
});

Cypress.Commands.add("updateUser", (userName, body) => {
  cy.request("PUT", `/user/${userName}`, body).should((response) => {
    expect(response.status).eq(200);
  });
});

Cypress.Commands.add("addNotExistUser", (body) => {
  cy.getUser(body.username).should((response) => {
    if (response.status === 404) {
      cy.addUser(body);
    }
  });
});

Cypress.Commands.add("deleteExistUser", (body) => {
  cy.getUser(body.username).should((response) => {
    if (response.status === 200) {
      cy.deleteUser(body.username);
    }
  });
});
