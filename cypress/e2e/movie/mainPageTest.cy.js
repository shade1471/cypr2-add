import AdminPage from "../../support/PageObjects/AdminPage";
import ClientPage from "../../support/PageObjects/ClientPage";

const admPage = new AdminPage();
const clientPage = new ClientPage();

describe("Main Pages suites", () => {
  beforeEach(() => {
    cy.viewport(Cypress.env("viewportWidth"), Cypress.env("viewportHeight"));
  });
  it("Should check main page's client", () => {
    cy.visit("/client/index.php");
    clientPage.getHeader().should("be.visible");
    clientPage.getNavMenu().should("be.visible");
  });

  it("Should check main page's admin", () => {
    cy.visit("/admin");
    admPage.getHeader().contains("Администраторррская");
  });
});
