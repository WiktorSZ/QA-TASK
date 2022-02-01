class InstallationPage {
  detailsButton() {
    return cy.get("[gtmcategory='installationDetails']#gtm_open");
  }
  rebootButton() {
    return cy.get("[gtmaction='Reboot gateway modal']");
  }
  stickyPanel() {
    return cy.get("app-sticky-panel");
  }
  modalConfirmButton() {
    return cy.get("#mat-dialog-0 #confirm-btn");
  }
  addNoteButton() {
    return cy.get("[gtmcategory='notePanel']");
  }
  noteInput() {
    return cy.get("[gtmid='note']");
  }
  noteSaveButton() {
    return cy.get("#gtm_save-btn");
  }
  panleNoteData(text) {
    return cy.get(".note").contains(text);
  }
}
export default new InstallationPage();
