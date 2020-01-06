Feature: Homepagetest

@smoke
Scenario: tabs present
Given Launch web application
When  women dresses tshirt tabs are displayed
Then validate tabs are present
@Regression @smoke
Scenario: navigation 
Given user in  homepage
When  women,dresses,tshirt tabs are navigated
Then  validate the navigation sucessfully  


Scenario: subscription message
Given user is in anypage
When  user enters email in subscription box
Then  user should see the message