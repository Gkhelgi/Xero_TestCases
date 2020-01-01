package cucumberOptions;



import java.io.File;

import org.junit.runner.RunWith;
import org.testng.Reporter;
import org.testng.annotations.AfterClass;

import cucumber.api.CucumberOptions;

import cucumber.api.junit.Cucumber;

	
	@RunWith(Cucumber.class)
	@CucumberOptions(
		format = { "pretty", "html:target/cucumber", "json:target/cucumber-report.json" },features= {"C:\\Users\\Megha\\Documents\\eclipse\\Automation\\src\\test\\java\\features\\Multiplication.feature"},
			glue= {"stepDefinitions"}
					
			
			)
	public class TestRunner_Mul {
		
		
	}
	


