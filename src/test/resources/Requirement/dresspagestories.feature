Feature: Dressespagefeature
Scenario: dress size display
Givenlaunch the application
when user clicks dressespag
Then user should see the L, M and S   is displayed

Scenario: dress size match verify
Given user in dresses page
When user clicks  L, M and S  
Then user should see match the product count

Scenario: first product add and verifyadded to cart
Given user in dresses page
When user click the first product addtocart 
Then product should be added to cart succesfully
