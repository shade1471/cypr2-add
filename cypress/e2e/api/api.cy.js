const body = require("../../fixtures/userBody.json");
const updateBody = require("../../fixtures/updatedUserBody.json");

after(() => {
  cy.deleteExistUser(body);
  cy.deleteExistUser(updateBody);
});

describe("Petstore API test", () => {
  it("Should add new user", () => {
    cy.addUser(body).should((response) => {
      expect(response.status).to.eq(200);
    });
  });

  it("Should Get info about user by name", () => {
    cy.addNotExistUser(body);
    cy.getUser(body.username).should((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("lastName", body.lastName);
      expect(response.body).to.have.property("email", body.email);
      expect(response.body.id).to.equal(body.id);
    });
  });

  it("Should delete user", () => {
    cy.addNotExistUser(body);
    cy.deleteUser(body.username).should((response) => {
      expect(response.status).eq(200);
    });
  });

  it("Should get message if user isn't exist", () => {
    cy.deleteExistUser(body);
    cy.getUser(body.username).should((response) => {
      expect(response.status).eq(404);
      expect(response.body.message).to.eq("User not found");
    });
  });

  it("Should add, update user and then delete it", () => {
    //Добавить пользователя,в случае если он несуществует
    cy.addNotExistUser(body);
    //Обновить юзера
    cy.updateUser(body.username, updateBody);
    //Убедиться, что пользователь по старому имени не доступен после обновления
    cy.getUser(body.username).should((response) => {
      expect(response.status).eq(404);
      expect(response.body.message).to.eq("User not found");
    });
    //Сверить ответ об обновленном пользователе с данными в запросе на обновление
    cy.getUser(updateBody.username).should((response) => {
      expect(response.body.id).to.eq(updateBody.id);
      expect(response.body.username).to.eq(updateBody.username);
    });
    //Удалить обновленного пользователя
    cy.deleteUser(updateBody.username);
  });
});
