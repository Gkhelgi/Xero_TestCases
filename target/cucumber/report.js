$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/Megha/Documents/eclipse/Automation/src/test/java/features/Multiplication.feature");
formatter.feature({
  "line": 1,
  "name": "Login into Xero",
  "description": "",
  "id": "login-into-xero",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "TC01_A_Navigate to Xero",
  "description": "",
  "id": "login-into-xero;tc01-a-navigate-to-xero",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "Navigate to \"https://login.xero.com/\" site",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enters \"gkhelgi@gmail.com\" and \"bangal0re@KA\" and logs in",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Users Home page is displayed",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://login.xero.com/",
      "offset": 13
    }
  ],
  "location": "Login_Xero.navigate_to_site(String)"
});
formatter.result({
  "duration": 39479842500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "gkhelgi@gmail.com",
      "offset": 13
    },
    {
      "val": "bangal0re@KA",
      "offset": 37
    }
  ],
  "location": "Login_Xero.user_enters_something_and_something_and_logs_in(String,String)"
});
formatter.result({
  "duration": 5667859100,
  "status": "passed"
});
formatter.match({
  "location": "Login_Xero.users_Home_page_is_displayed()"
});
formatter.result({
  "duration": 64211300,
  "status": "passed"
});
formatter.after({
  "duration": 8368352100,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "TC02_B_Invalid Password",
  "description": "",
  "id": "login-into-xero;tc02-b-invalid-password",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "Navigate to \"https://login.xero.com/\" site",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "User enters \"gkhelgi@gmail.com\" and  wrong password \"bangal0re\" and click login",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "validate the error message \"Your Email or Password is incorrect\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://login.xero.com/",
      "offset": 13
    }
  ],
  "location": "Login_Xero.navigate_to_site(String)"
});
formatter.result({
  "duration": 21696328600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "gkhelgi@gmail.com",
      "offset": 13
    },
    {
      "val": "bangal0re",
      "offset": 53
    }
  ],
  "location": "Login_Xero.user_enters_and_wrong_password_and_click_login(String,String)"
});
formatter.result({
  "duration": 4616776600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your Email or Password is incorrect",
      "offset": 28
    }
  ],
  "location": "Login_Xero.validate_the_error_message(String)"
});
formatter.result({
  "duration": 173500,
  "status": "passed"
});
formatter.after({
  "duration": 2835402400,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "TC03__Invalid Username",
  "description": "",
  "id": "login-into-xero;tc03--invalid-username",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 15,
  "name": "Navigate to \"https://login.xero.com/\" site",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "User enters wrong  \"gkhelgi@gmail.com\" and  wrong password \"bangal0re\" and click login",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "validate the error message for invalid pasword \"Your Email or Password is incorrect\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://login.xero.com/",
      "offset": 13
    }
  ],
  "location": "Login_Xero.navigate_to_site(String)"
});
formatter.result({
  "duration": 13379658000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "gkhelgi@gmail.com",
      "offset": 20
    },
    {
      "val": "bangal0re",
      "offset": 60
    }
  ],
  "location": "Login_Xero.user_enters_wrong_and_wrong_password_and_click_login(String,String)"
});
formatter.result({
  "duration": 4379182700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your Email or Password is incorrect",
      "offset": 48
    }
  ],
  "location": "Login_Xero.validate_the_error_message_for_invalid_pasword(String)"
});
formatter.result({
  "duration": 126000,
  "status": "passed"
});
formatter.after({
  "duration": 3254994100,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "TC01_A_Navigate to Xero",
  "description": "",
  "id": "login-into-xero;tc01-a-navigate-to-xero",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 20,
  "name": "Navigate to \"https://login.xero.com/\" site",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "User enters \"gkhelgi@gmail.com\" and \"bangal0re@KA\" and logs in",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "DashBoard page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Click on UserMenu",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Click on logout",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Validate Usrname field",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://login.xero.com/",
      "offset": 13
    }
  ],
  "location": "Login_Xero.navigate_to_site(String)"
});
formatter.result({
  "duration": 11568525200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "gkhelgi@gmail.com",
      "offset": 13
    },
    {
      "val": "bangal0re@KA",
      "offset": 37
    }
  ],
  "location": "Login_Xero.user_enters_something_and_something_and_logs_in(String,String)"
});
formatter.result({
  "duration": 5926793200,
  "status": "passed"
});
formatter.match({
  "location": "Login_Xero.dashboard_page_is_displayed()"
});
formatter.result({
  "duration": 72600,
  "status": "passed"
});
formatter.match({
  "location": "Login_Xero.click_on_UserMenu()"
});
formatter.result({
  "duration": 3121304600,
  "status": "passed"
});
formatter.match({
  "location": "Login_Xero.click_on_logout()"
});
formatter.result({
  "duration": 6419177600,
  "status": "passed"
});
formatter.match({
  "location": "Login_Xero.validate_Usrname_field()"
});
formatter.result({
  "duration": 189400,
  "status": "passed"
});
formatter.after({
  "duration": 1625862300,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "TC02_A_Upload_Profile_Pic",
  "description": "",
  "id": "login-into-xero;tc02-a-upload-profile-pic",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 28,
  "name": "Navigate to \"https://login.xero.com/\" site",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "User enters \"gkhelgi@gmail.com\" and \"bangal0re@KA\" and logs in",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "click on user menu",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "click on user profile",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "click on upload picture",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://login.xero.com/",
      "offset": 13
    }
  ],
  "location": "Login_Xero.navigate_to_site(String)"
});
formatter.result({
  "duration": 11209496600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "gkhelgi@gmail.com",
      "offset": 13
    },
    {
      "val": "bangal0re@KA",
      "offset": 37
    }
  ],
  "location": "Login_Xero.user_enters_something_and_something_and_logs_in(String,String)"
});
formatter.result({
  "duration": 5969017000,
  "status": "passed"
});
formatter.match({
  "location": "Login_Xero.click_on_user_menu()"
});
formatter.result({
  "duration": 3116736600,
  "status": "passed"
});
formatter.match({
  "location": "Login_Xero.click_on_user_profile()"
});
formatter.result({
  "duration": 4794451000,
  "status": "passed"
});
formatter.match({
  "location": "Login_Xero.click_on_upload_picture()"
});
formatter.result({
  "duration": 3043266000,
  "status": "passed"
});
formatter.after({
  "duration": 1914224900,
  "status": "passed"
});
});