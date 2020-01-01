package stepDefinitions;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import cucumber.api.java.en.Then;
import cucumber.api.java.After;
import cucumber.api.java.en.And;
import cucumber.api.junit.Cucumber;
import junit.framework.Assert;

import org.junit.runner.RunWith;
import org.openqa.selenium.WebElement;

import Pages.Application_Page;
import Pages.DashBoardPage;
import Pages.LoginPage;


@RunWith(Cucumber.class)
public class Login_Xero extends Base{
	@Given("^Navigate to \"([^\"]*)\" site$")
	public void navigate_to_site(String arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		driver=SetUp();
        driver.get(arg1);
	}	    

	    @When("^User enters \"([^\"]*)\" and \"([^\"]*)\" and logs in$")
	    public void user_enters_something_and_something_and_logs_in(String strArg1, String strArg2) throws Throwable {
	    	LoginPage lp=new LoginPage(driver);
	        lp.getusername().sendKeys(strArg1);
	        lp.getpassword().sendKeys(strArg2);
	        lp.getclickLogin().click();
	    }


	    @Then("^Users Home page is displayed$")
	    public void users_Home_page_is_displayed() throws Throwable {
	        // Write code here that turns the phrase above into concrete actions
	    	  System.out.println(driver.getCurrentUrl());
	      	Assert.assertEquals("https://go.xero.com/Dashboard/", driver.getCurrentUrl());
	    }
	      	@When("^User enters \"([^\"]*)\" and  wrong password \"([^\"]*)\" and click login$")
	      	public void user_enters_and_wrong_password_and_click_login(String arg1, String arg2) throws Throwable {
	      	    // Write code here that turns the phrase above into concrete actions
	      		LoginPage lp=new LoginPage(driver);
		        lp.getusername().sendKeys(arg1);
		        lp.getpassword().sendKeys(arg2);
		        lp.getclickLogin().click();
	      	}

	      	@Then("^validate the error message \"([^\"]*)\"$")
	      	public void validate_the_error_message(String arg1) throws Throwable {
	      	    // Write code here that turns the phrase above into concrete actions
	      	    System.out.println("Hello");
	      	}

	      	@When("^User enters wrong  \"([^\"]*)\" and  wrong password \"([^\"]*)\" and click login$")
	      	public void user_enters_wrong_and_wrong_password_and_click_login(String arg1, String arg2) throws Throwable {
	      	    // Write code here that turns the phrase above into concrete actions
	      		LoginPage lp=new LoginPage(driver);
		        lp.getusername().sendKeys(arg1);
		        lp.getpassword().sendKeys(arg2);
		        lp.getclickLogin().click();
	      	}

	      	@Then("^validate the error message for invalid pasword \"([^\"]*)\"$")
	      	public void validate_the_error_message_for_invalid_pasword(String arg1) throws Throwable {
	      	    // Write code here that turns the phrase above into concrete actions
	      	    System.out.println("Bye");
	      	}
	      	@Then("^DashBoard page is displayed$")
	      	public void dashboard_page_is_displayed() throws Throwable {
	      	    // Write code here that turns the phrase above into concrete actions
	      	   System.out.println("Dashboard page is displayed");
	      	}

	      	@Then("^Click on UserMenu$")
	      	public void click_on_UserMenu() throws Throwable {
	      	    // Write code here that turns the phrase above into concrete actions
	      	    DashBoardPage dp=new DashBoardPage(driver);	 
	      	  Thread.sleep(3000);
	      	    dp.geuserMenu().click();
	      	}

	      	@Then("^Click on logout$")
	      	public void click_on_logout() throws Throwable {
	      	    // Write code here that turns the phrase above into concrete actions
	      		DashBoardPage dp=new DashBoardPage(driver);
	      	    dp.getlogOut().click();
	      	}

	      	@Then("^Validate Usrname field$")
	      	public void validate_Usrname_field() throws Throwable {
	      	    // Write code here that turns the phrase above into concrete actions
	      	    System.out.println("UserField is displayed");
	      	}

	        @Then("^click on user menu$")
	        public void click_on_user_menu() throws Throwable {
	        	 DashBoardPage dp=new DashBoardPage(driver);
	        	 Thread.sleep(3000);
		      	    dp.geuserMenu().click();
		      	    
	        }

	        @And("^click on user profile$")
	        public void click_on_user_profile() throws Throwable {
	        	 DashBoardPage dp=new DashBoardPage(driver);
		      	    dp.getuserProfile().click();
	        }

	        @And("^click on upload picture$")
	        public void click_on_upload_picture() throws Throwable {
	        	 DashBoardPage dp=new DashBoardPage(driver);
	        	 Thread.sleep(3000);
	        	 dp.getimagedisplayed().isDisplayed();
		      	   // dp.getuploadImage().click();
		      	
	        }
		      	
			      @After
			      public void tearDown()
			      {
			    	  reports.flush();
			    	  driver.close();
			      }

	        }




		    
	    

	    


	


	

