export function demoStart() {
  cy.intercept({
    //  statusCode: "200",
    method: "GET",
    url: "**/vitoguide/settings/v1/units",
  }).as("demoStart");
}
