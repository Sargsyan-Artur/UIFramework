@steps
Feature: Test steps

  Background:
    Given I navigate to Wiki page

  Scenario: Check CSS properties and the text of "My Location" option in "My Account" menu on TimeAndDate page
    When I open the URL "https://www."
    And I am on TimeAndDate page
    And I should wait until "agreeToCookies" element is visible
    And I click on "agreeToCookies" element if it is "visible"
    And I click on "expandNavigationMenuButton" element if I am using mobile
    And I hover for desktop or click for mobile on "myAccountDropDownMenu" element
    And I should wait until "myAccountDropDownMenuList" element is visible
    Then CSS "align-items" property of "myLocationOption" element should be equal to "center"
    And CSS "font-size" property of "myLocationOption" element should be equal to "14px"
    And CSS "text-align" property of "myLocationOption" element should be equal to "left"
    And CSS "white-space-collapse" property of "myLocationOption" element should be equal to "collapse"
    And CSS "background-size" property of "myLocationOption" element should be equal to "auto"
    Then "myLocationOption" element should equal "My Location" text for desktop and "My Location" for mobile
