Feature: Login into Xero


Scenario: TC01_A_Navigate to Xero  
    Given Navigate to "https://login.xero.com/" site     
    When User enters "gkhelgi@gmail.com" and "bangal0re@KA" and logs in
    Then Users Home page is displayed 
    
	Scenario: TC02_B_Invalid Password  
    Given Navigate to "https://login.xero.com/" site   
    When User enters "gkhelgi@gmail.com" and  wrong password "bangal0re" and click login
    Then  validate the error message "Your Email or Password is incorrect"
    
 Scenario: TC03__Invalid Username      
    Given Navigate to "https://login.xero.com/" site   
    When User enters wrong  "gkhelgi@gmail.com" and  wrong password "bangal0re" and click login
    Then  validate the error message for invalid pasword "Your Email or Password is incorrect"
    
 Scenario: TC01_A_Navigate to Xero  
    Given Navigate to "https://login.xero.com/" site     
    When User enters "gkhelgi@gmail.com" and "bangal0re@KA" and logs in
    Then DashBoard page is displayed 
   And Click on UserMenu   
   And Click on logout
   Then Validate Usrname field
   
    Scenario: TC02_A_Upload_Profile_Pic
    Given Navigate to "https://login.xero.com/" site     
    When User enters "gkhelgi@gmail.com" and "bangal0re@KA" and logs in
    Then click on user menu
    And click on user profile
    And click on upload picture
   
    