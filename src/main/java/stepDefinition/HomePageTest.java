package stepDefinition;

import org.junit.Assert;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pageObjects.HomePageObjects;
import utility.BaseClass;

public class HomePageTest  
{
	BaseClass bp;
	HomePageObjects ob;
 

@Given("^Launch web application$")
public void user_in_homwpage() {
	   bp=new BaseClass();
	   ob=new HomePageObjects();   
}



@When("^women dresses tshirt tabs are displayed$")
public void women_dresses_tshirt_tabs_are_displayed() {
	ob.iswomentabpresent();
	ob.isdresstabpresent();
    ob.istshirttabpresent();
}

@Then("^validate tabs are present$")
public void validate_tabs_are_present() {
    Assert.assertTrue(ob.iswomentabpresent());
    Assert.assertTrue(ob.isdresstabpresent());
    Assert.assertTrue(ob.istshirttabpresent());
}

@Given("^user in  homepage$")
public void user_in_homepage(){
	
	 bp=new BaseClass();
	 ob=new HomePageObjects(); 
}

 
@When("^women,dresses,tshirt tabs are navigated$")
public void women_dresses_tshirt_tabs_are_navigated()  {

	ob.isnavigatedwomen();
	ob.isnavigateddress();
	ob.isnavigatedtshirts();

	
}

@Then("^validate the navigation sucessfully$")
public void validate_the_navigation_sucessfully()  {
	   Assert.assertTrue(ob.isnavigatedwomen());
	    Assert.assertTrue(ob.isnavigateddress());
	    Assert.assertTrue(ob.istshirttabpresent());
   
}
@Given("^user is in anypage$")
public void user_is_in_homepage() {
	 bp=new BaseClass();
	 ob=new HomePageObjects(); 
   }


@When("^user enters email in subscription box$")
public void user_enters_email_in_subscription_box()  {
	
	ob.newletter();
   ob.isnewletter();
}

@Then("^user should see the message$")
public void user_should_see_the_message() throws Throwable {
	Assert.assertTrue(ob.isnewletter());
   }

}

