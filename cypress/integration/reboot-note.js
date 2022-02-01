import HomePage from "../page-objects/main-page.js";
import InstalationPage from "../page-objects/instalation-page";
import { demoStart } from "../support/mock";
import "cypress-localstorage-commands";

describe("Reboot note ", () => {
  beforeEach(() => {
    cy.viewport(1920, 1080);
    demoStart();
    cy.visit("");
    cy.setLocalStorage("uc_user_interaction", true); // mocking the localstorage to ignore cookies modal
  });

  it("Verifies if note functionality is available after gate reboot", () => {
    HomePage.runDemoButton().click();
    cy.wait("@demoStart");
    HomePage.offlineButton().click();
    HomePage.offlineButton().children().should("have.class", "active");
    HomePage.installationButton().first().click();
    InstalationPage.stickyPanel().should("be.visible");
    InstalationPage.detailsButton().click();
    InstalationPage.rebootButton().click();
    InstalationPage.modalConfirmButton().click();
    InstalationPage.addNoteButton().click();
    InstalationPage.noteInput().click().type("Gate has been rebooted");
    InstalationPage.noteSaveButton().click();
    InstalationPage.panleNoteData("Gate has been rebooted");
  });
});
