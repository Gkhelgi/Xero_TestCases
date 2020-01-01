package stepDefinitions;

import java.io.File;
import java.io.IOException;
import java.util.concurrent.TimeUnit;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import com.relevantcodes.extentreports.ExtentReports;
import com.relevantcodes.extentreports.ExtentTest;
import com.relevantcodes.extentreports.LogStatus;

public class Base {
	 public WebDriver driver;
	public static ExtentReports reports;
	public static ExtentTest logger;
	
	
	public WebDriver SetUp()
	{
		
		//String path = "C:\\Users\\Megha\\Desktop\\Automation_Architect\\ExtentReports\\SFDC.html";
		reports = new ExtentReports("MyExtentReports.html");
		logger=reports.startTest("Application Xero");
		logger.assignAuthor("GeetaK");
		logger.assignCategory("Smoke tEsting");
		
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\Megha\\chromedriver.exe");
		 driver = new ChromeDriver();	

		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		driver.manage().window().maximize();
		logger.log(LogStatus.PASS, "Chrome launched successfully");
		return driver;
	}
	public void getScreenshot(String result) throws IOException
	{
		File src=((TakesScreenshot)driver).getScreenshotAs(OutputType.FILE);
		FileUtils.copyFile(src, new File("C://test//"+result+"screenshot.png"));
		
	}


}
