class HomePage {
  offlineButton() {
    return cy.get("[data-at-filter='offline']");
  }
  installationButton() {
    return cy.get("app-installation-list .device-type");
  }
  rebootButton() {
    return cy.get("[gtmaction='Reboot gateway modal']");
  }
  runDemoButton() {
    return cy.get("[gtm='onDemoRun']");
  }
}
export default new HomePage();
