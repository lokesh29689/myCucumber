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
  "keyword": "Scenario"
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
  "duration": 38957226300,
  "status": "passed"
});
formatter.match({
  "location": "HomePageTest.women_dresses_tshirt_tabs_are_displayed()"
});
formatter.result({
  "duration": 318514500,
  "status": "passed"
});
formatter.match({
  "location": "HomePageTest.validate_tabs_are_present()"
});
formatter.result({
  "duration": 151427300,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "navigation",
  "description": "",
  "id": "homepagetest;navigation",
  "type": "scenario",
  "keyword": "Scenario"
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
  "duration": 1904400,
  "status": "passed"
});
formatter.match({
  "location": "HomePageTest.women_dresses_tshirt_tabs_are_navigated()"
});
formatter.result({
  "duration": 16237642200,
  "status": "passed"
});
formatter.match({
  "location": "HomePageTest.validate_the_navigation_sucessfully()"
});
formatter.result({
  "duration": 7580566600,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "subscription message",
  "description": "",
  "id": "homepagetest;subscription-message",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 15,
  "name": "user is in anypage",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "user enters email in subscription box",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "user should see the message",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageTest.user_is_in_homepage()"
});
formatter.result({
  "duration": 999500,
  "status": "passed"
});
formatter.match({
  "location": "HomePageTest.user_enters_email_in_subscription_box()"
});
formatter.result({
  "duration": 5719941400,
  "status": "passed"
});
formatter.match({
  "location": "HomePageTest.user_should_see_the_message()"
});
formatter.result({
  "duration": 43771400,
  "status": "passed"
});
});