package pageObjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import utility.BaseClass;

public class HomePageObjects extends BaseClass {
	
	@FindBy(xpath = "//ul[@class='sf-menu clearfix menu-content sf-js-enabled sf-arrows']/li/a[@title='Women']")
	private WebElement womentab;

	@FindBy(xpath = "//ul[@class='sf-menu clearfix menu-content sf-js-enabled sf-arrows']/li/a[@title='Dresses']")
	private WebElement dressestab;

	@FindBy(xpath = "//ul[@class='sf-menu clearfix menu-content sf-js-enabled sf-arrows']/li/a[@title='T-shirts']")
	private WebElement tshirttab;
	
	@FindBy(xpath="//div[@class='cat_desc']/span[contains(text(),women)] ")
	private WebElement navitowomen;
	
	@FindBy(xpath="//div[@class='cat_desc']/span[contains(text(),dresses)] ")
	private WebElement navitodress;
	
	@FindBy(xpath="//div[@class='cat_desc']/span[contains(text(),t-shirts)] ")
	private WebElement navitotshirts;
	
	@FindBy(xpath="//*[@id='newsletter-input']")
	private WebElement newsletter;
	
	@FindBy(xpath="//*[@class='form-group']/child::button")
	private WebElement newsletterbutton;
	
	@FindBy(xpath="//*[@id='columns']/child::p")
	private WebElement subscription;
	
	
	public HomePageObjects() {
		PageFactory.initElements(driver, this);
	}

	public boolean iswomentabpresent()
		{
		return elementFound(womentab);
			
	}
	public boolean isdresstabpresent()
	{
		return elementFound(dressestab);
	
	}
	public boolean istshirttabpresent()
	{
		return elementFound(tshirttab);
	
    }
	
	public boolean isnavigatedwomen()
	{
		womentab.click();
		return elementFound(navitowomen);
	}
	public boolean isnavigateddress()
	{
		dressestab.click();
		return elementFound(navitodress);
			
	}
	public boolean isnavigatedtshirts()
	{
		tshirttab.click();
		return elementFound(navitotshirts);
			
	}
	public void newletter() {
		
		newsletter.click();
		newsletter.sendKeys("lokeshforall@gmail.com");
		newsletterbutton.click();
	}	
	public boolean isnewletter()
	{
		
		return elementFound(subscription);
		
	}
	
	
	
}
