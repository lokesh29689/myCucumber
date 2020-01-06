$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Requirement/homepage.feature");
formatter.feature({
  "line": 1,
  "name": "Homepagetest",
  "description": "",
  "id": "homepagetest",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "tabs present",
  "description": "",
  "id": "homepagetest;tabs-present",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Launch web application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "women dresses tshirt tabs are displayed",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "validate tabs are present",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageTest.user_in_homwpage()"
});
formatter.result({
  "duration": 430907104300,
  "status": "passed"
});
formatter.match({
  "location": "HomePageTest.women_dresses_tshirt_tabs_are_displayed()"
});
formatter.result({
  "duration": 294470700,
  "status": "passed"
});
formatter.match({
  "location": "HomePageTest.validate_tabs_are_present()"
});
formatter.result({
  "duration": 328652000,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "navigation",
  "description": "",
  "id": "homepagetest;navigation",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@Regression"
    },
    {
      "line": 8,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "user in  homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "women,dresses,tshirt tabs are navigated",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "validate the navigation sucessfully",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageTest.user_in_homepage()"
});
formatter.result({
  "duration": 2831700,
  "status": "passed"
});
formatter.match({
  "location": "HomePageTest.women_dresses_tshirt_tabs_are_navigated()"
});
formatter.result({
  "duration": 43349203400,
  "status": "passed"
});
formatter.match({
  "location": "HomePageTest.validate_the_navigation_sucessfully()"
});
formatter.result({
  "duration": 8993685600,
  "status": "passed"
});
});