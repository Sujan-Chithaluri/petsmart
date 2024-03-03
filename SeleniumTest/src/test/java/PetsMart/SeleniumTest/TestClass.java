package PetsMart.SeleniumTest;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.concurrent.TimeoutException;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.MethodOrderer;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.openqa.selenium.JavascriptExecutor;


@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
public class TestClass {

    private WebDriver driver;
    private WebDriverWait wait;
        
    @BeforeEach
    public void setup() {
    	System.setProperty("webdriver.chrome.driver", "C:\\Users\\chith\\OneDrive\\Desktop\\sel\\chromedriver-win64//chromedriver.exe");
        driver = new ChromeDriver();
        
        driver.manage().window().maximize();

        wait = new WebDriverWait(driver, 30);
        driver.get("http://localhost:3000/login");
        
    }
    
    
    
    @Test
    @Order(1)
    public void registrationTest() throws InterruptedException, TimeoutException {
    
        WebElement registerLink = wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//a[@href='/register']")));
        registerLink.click();
        Thread.sleep(1000);
        System.out.println("navigated to Registration Page");
        
        WebElement fnInput = driver.findElement(By.name("firstname"));
        fnInput.sendKeys("John");
        Thread.sleep(1000);
        
        WebElement lnInput = driver.findElement(By.name("lastname"));
        lnInput.sendKeys("Wick");
        Thread.sleep(1000);
        
        WebElement emailInput = driver.findElement(By.name("email"));
        emailInput.sendKeys("john123@gmail.com");
        Thread.sleep(1000);
        
        WebElement passwordInput = driver.findElement(By.name("password"));
        passwordInput.sendKeys("jw123123");
        Thread.sleep(1000);
        
       
        
        WebElement registerButton = wait.until(ExpectedConditions.elementToBeClickable(By.cssSelector("button.btn.btn-primary.w-100.py-3[type='submit']")));
        registerButton.click();
        Thread.sleep(1000);
        
        String expectedUrlAfterRegistration = "http://localhost:3000/login";
        wait.until(ExpectedConditions.urlToBe(expectedUrlAfterRegistration));
        String actualUrlAfterLogin = driver.getCurrentUrl();
        Assertions.assertEquals(expectedUrlAfterRegistration, actualUrlAfterLogin, "The URLs do not match after Registration.");
        
        System.out.println("Success: The URLs match after Registration, Navigated to Login Page.");
        
    }


    @Test
    @Order(2)
    public void testLoginAndNavigate() throws InterruptedException, TimeoutException {
    	WebElement usernameField = wait.until(ExpectedConditions.elementToBeClickable(By.name("email")));
        usernameField.sendKeys("john123@gmail.com");
        
        WebElement passwordField = wait.until(ExpectedConditions.elementToBeClickable(By.name("password")));
        passwordField.sendKeys("jw123123");
        
        WebElement loginButton = wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//button[@type='submit' and text()='Login']")));
        loginButton.click();
        
        String expectedUrlAfterLogin = "http://localhost:3000/home";
        wait.until(ExpectedConditions.urlToBe(expectedUrlAfterLogin));
        
        String actualUrlAfterLogin = driver.getCurrentUrl();
        Assertions.assertEquals(expectedUrlAfterLogin, actualUrlAfterLogin, "The URLs do not match after login.");
        
        System.out.println("Success: The URLs match after login, Navigated to Home Page.");
    }
    
    @Test
    @Order(3)
    public void cartVisible() throws InterruptedException, TimeoutException {
    	WebElement usernameField = wait.until(ExpectedConditions.elementToBeClickable(By.name("email")));
        usernameField.sendKeys("john123@gmail.com");
        
        WebElement passwordField = wait.until(ExpectedConditions.elementToBeClickable(By.name("password")));
        passwordField.sendKeys("jw123123");
        
        WebElement loginButton = wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//button[@type='submit' and text()='Login']")));
        loginButton.click();
        
        WebElement cartOption = wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//a[@href='/cart']")));
        Assertions.assertTrue(cartOption.isDisplayed(), "Cart option is not displayed.");
        
        System.out.println("Success: Cart option is displayed post login.");
    }
    
    @Test
    @Order(4)
    public void testPetboardingAndTraining() throws InterruptedException, TimeoutException {
    	WebElement usernameField = wait.until(ExpectedConditions.elementToBeClickable(By.name("email")));
        usernameField.sendKeys("john123@gmail.com");
        
        WebElement passwordField = wait.until(ExpectedConditions.elementToBeClickable(By.name("password")));
        passwordField.sendKeys("jw123123");
        
        WebElement loginButton = wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//button[@type='submit' and text()='Login']")));
        loginButton.click();
        
        System.out.println("Successfully logged in and Navigated to Home page");
         
        wait.until(ExpectedConditions.invisibilityOfElementLocated(By.cssSelector("div.loading-spinner")));
         
    	WebElement serviceLink = wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//a[@href='/services']")));
        serviceLink.click();
        Thread.sleep(1000);
        
        System.out.println("navigated to service page");
        
        WebElement readMoreLink = wait.until(ExpectedConditions.elementToBeClickable(By.cssSelector("a.text-primary.text-uppercase[href='/training']")));
        readMoreLink.click();
        Thread.sleep(2000); 
        
        System.out.println("navigated to PET BOARDING & TRAINING page");
        
        WebElement bookAppointmentLink = wait.until(ExpectedConditions.elementToBeClickable(By.cssSelector("a.text-primary.text-uppercase[href='/appointment']")));
        ((JavascriptExecutor) driver).executeScript("arguments[0].scrollIntoView(true);", bookAppointmentLink);
        ((JavascriptExecutor) driver).executeScript("arguments[0].click();", bookAppointmentLink);
        Thread.sleep(1000);
        
        System.out.println("navigated to BOOK AN APPOINTMENT page");
        
        WebElement nameInput = driver.findElement(By.name("username"));
        nameInput.sendKeys("John Doe");
        Thread.sleep(1000);
        
        WebElement emailInput = driver.findElement(By.name("email"));
        emailInput.sendKeys("phvpk13@gmail.com");
        Thread.sleep(1000);
        
        WebElement dateInput = driver.findElement(By.name("date"));
        dateInput.sendKeys("11/29/2023");
        Thread.sleep(1000);
        
        WebElement timeInput = driver.findElement(By.name("timeSlot"));
        timeInput.sendKeys("08:59AM");
        Thread.sleep(1000);
        
        WebElement messageInput = driver.findElement(By.name("message"));
        messageInput.sendKeys("I'd like to book an apointment in PET BOARDING & TRAINING");
        Thread.sleep(1000);
        
        System.out.println("Filled the form to book an appointment in PET BOARDING & TRAINING");
        
        WebElement submitButton = wait.until(ExpectedConditions.elementToBeClickable(By.cssSelector("button.btn.btn-white[type='submit']")));
        ((JavascriptExecutor) driver).executeScript("arguments[0].scrollIntoView(true);", submitButton);
        ((JavascriptExecutor) driver).executeScript("arguments[0].click();", submitButton);

        
        Thread.sleep(1000);
        
        System.out.println("Submitted the form");
        
        
        Thread.sleep(3000);
        wait.until(ExpectedConditions.invisibilityOfElementLocated(By.cssSelector("div.loading-spinner")));

		WebElement modalContent = wait.until(ExpectedConditions.visibilityOfElementLocated(By.className("modal-content")));
		Assertions.assertTrue(modalContent.isDisplayed(), "Model content is not displayed.");
        System.out.println("Success: Model content is displayed.");
        
        Thread.sleep(3000);
		WebElement closeButton = wait.until(ExpectedConditions.elementToBeClickable(
                By.xpath(".//div[contains(@class,'modal-dialog')]//button[contains(@class, 'btn-primary') and normalize-space(text())='Close']")));
		closeButton.click();
		Thread.sleep(3000);
		
		WebElement dropdownToggle = wait.until(ExpectedConditions.elementToBeClickable(
			    By.xpath("//a[@class='nav-link dropdown-toggle text-white text-truncate' and @data-bs-toggle='dropdown']")));
			dropdownToggle.click();

			
		WebElement yourAppointmentLink = wait.until(ExpectedConditions.elementToBeClickable(
			    By.xpath("//a[@class='dropdown-item' and @href='/your-appointments']")));
		yourAppointmentLink.click();
			Thread.sleep(3000);
			
		System.out.println("Navigated to your-orders");
			
		WebElement appointmentDetails = driver.findElement(By.xpath("//small[contains(., 'Name :')]"));
		String detailsText = appointmentDetails.getText();
		String actualName = detailsText.split(":")[1].trim();
		assertEquals("John Doe", actualName, "Appointment name does not match expected value");
		
		System.out.println("SUCCESS: An appointment is scheduled for John Doe");        
    }
    
    
    @Test
    @Order(5)
    public void petGrooming() throws InterruptedException, TimeoutException {
    	
    	WebElement usernameField = wait.until(ExpectedConditions.elementToBeClickable(By.name("email")));
        usernameField.sendKeys("john123@gmail.com");
        
        WebElement passwordField = wait.until(ExpectedConditions.elementToBeClickable(By.name("password")));
        passwordField.sendKeys("jw123123");
        
        WebElement loginButton = wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//button[@type='submit' and text()='Login']")));
        loginButton.click();
        
        System.out.println("Successfully logged in and Navigated to Home page");
         
    	WebElement serviceLink = wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//a[@href='/services']")));
        serviceLink.click();
        Thread.sleep(1000);
        
        System.out.println("navigated to service page");
        WebElement readMoreLink = wait.until(ExpectedConditions.elementToBeClickable(By.cssSelector("a.text-primary.text-uppercase[href='/grooming']")));
        readMoreLink.click();
        
        Thread.sleep(2000); 
        
        System.out.println("navigated to PET GROOMING");
        
        WebElement bookAppointmentLink = wait.until(ExpectedConditions.elementToBeClickable(By.cssSelector("a.text-primary.text-uppercase[href='/appointment']")));
        ((JavascriptExecutor) driver).executeScript("arguments[0].scrollIntoView(true);", bookAppointmentLink);
        ((JavascriptExecutor) driver).executeScript("arguments[0].click();", bookAppointmentLink);

        Thread.sleep(1000);
        
        System.out.println("navigated to BOOK AN APPOINTMENT page");
        
        
        WebElement nameInput3 = driver.findElement(By.name("username"));
        nameInput3.sendKeys("Jacob");
        Thread.sleep(1000);
        
        WebElement emailInput3 = driver.findElement(By.name("email"));
        emailInput3.sendKeys("Jacob1234@gmail.com");
        Thread.sleep(1000);
        
        WebElement dateInput3 = driver.findElement(By.name("date"));
        dateInput3.sendKeys("12/12/2023");
        Thread.sleep(1000);
        
        WebElement timeInput3 = driver.findElement(By.name("timeSlot"));
        timeInput3.sendKeys("08:00AM");
        Thread.sleep(1000);
        
        WebElement messageInput3 = driver.findElement(By.name("message"));
        messageInput3.sendKeys("I'd like to book an apointment in PET GROOMING");
        Thread.sleep(1000);
        
        System.out.println("Filled the form to book an appointment in PET GROOMING");
        
        WebElement submitButton = wait.until(ExpectedConditions.elementToBeClickable(By.cssSelector("button.btn.btn-white[type='submit']")));
        ((JavascriptExecutor) driver).executeScript("arguments[0].scrollIntoView(true);", submitButton);
        ((JavascriptExecutor) driver).executeScript("arguments[0].click();", submitButton);

        Thread.sleep(1000);
        
        System.out.println("Submitted the form");
        
        
        Thread.sleep(3000);
		WebElement modalContent3 = wait.until(ExpectedConditions.visibilityOfElementLocated(By.className("modal-content")));
		Assertions.assertTrue(modalContent3.isDisplayed(), "Model content is not displayed.");
        System.out.println("Success: Model content is displayed.");
        Thread.sleep(3000);
		
        WebElement closeButton3 = wait.until(ExpectedConditions.elementToBeClickable(
                By.xpath(".//div[contains(@class,'modal-dialog')]//button[contains(@class, 'btn-primary') and normalize-space(text())='Close']")));
		closeButton3.click();
		Thread.sleep(3000);
		
		WebElement dropdownToggle3 = wait.until(ExpectedConditions.elementToBeClickable(
			    By.xpath("//a[@class='nav-link dropdown-toggle text-white text-truncate' and @data-bs-toggle='dropdown']")));
			dropdownToggle3.click();

			
		WebElement yourAppointmentLink3 = wait.until(ExpectedConditions.elementToBeClickable(
			    By.xpath("//a[@class='dropdown-item' and @href='/your-appointments']")));
		yourAppointmentLink3.click();
			Thread.sleep(3000);
			
		System.out.println("Navigated to your-orders");
		
		WebElement appointmentDetails3 = driver.findElement(By.xpath("//small[contains(., 'Name : Jacob')]"));
		String detailsText3 = appointmentDetails3.getText();
		String actualName3 = detailsText3.split(":")[1].trim();
		assertEquals("Jacob", actualName3, "Appointment name does not match expected value");
		
		System.out.println("SUCCESS: An appointment is scheduled for Jacob");
    }
    
    @Test
    @Order(6)
    public void petTreatment() throws InterruptedException, TimeoutException {
    	
    	WebElement usernameField = wait.until(ExpectedConditions.elementToBeClickable(By.name("email")));
        usernameField.sendKeys("john123@gmail.com");
        
        WebElement passwordField = wait.until(ExpectedConditions.elementToBeClickable(By.name("password")));
        passwordField.sendKeys("jw123123");
        
        WebElement loginButton = wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//button[@type='submit' and text()='Login']")));
        loginButton.click();
        System.out.println("Successfully logged in and Navigated to Home page");
         
    	WebElement serviceLink = wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//a[@href='/services']")));
        serviceLink.click();
        Thread.sleep(1000);
        System.out.println("navigated to service page");
        
        WebElement readMoreLink = wait.until(ExpectedConditions.elementToBeClickable(By.cssSelector("a.text-primary.text-uppercase[href='/treatment']")));
        readMoreLink.click();
        Thread.sleep(2000); 
        
        System.out.println("navigated to PET TREATMENT");
        
        WebElement bookAppointmentLink = wait.until(ExpectedConditions.elementToBeClickable(By.cssSelector("a.text-primary.text-uppercase[href='/appointment']")));
        ((JavascriptExecutor) driver).executeScript("arguments[0].scrollIntoView(true);", bookAppointmentLink);
        ((JavascriptExecutor) driver).executeScript("arguments[0].click();", bookAppointmentLink);

        Thread.sleep(1000);
        
        System.out.println("navigated to BOOK AN APPOINTMENT page");
        
        
        WebElement nameInput2 = driver.findElement(By.name("username"));
        nameInput2.sendKeys("Peter Parker");
        Thread.sleep(1000);
        
        WebElement emailInput2 = driver.findElement(By.name("email"));
        emailInput2.sendKeys("peterparker@gmail.com");
        Thread.sleep(1000);
        
        WebElement dateInput2 = driver.findElement(By.name("date"));
        dateInput2.sendKeys("12/01/2023");
        Thread.sleep(1000);
        
        WebElement timeInput2 = driver.findElement(By.name("timeSlot"));
        timeInput2.sendKeys("08:00AM");
        Thread.sleep(1000);
        
        WebElement messageInput2 = driver.findElement(By.name("message"));
        messageInput2.sendKeys("I'd like to book an apointment in PET TREATMENT");
        Thread.sleep(1000);
        
        System.out.println("Filled the form to book an appointment in PET TREATMENT");
        
        WebElement submitButton = wait.until(ExpectedConditions.elementToBeClickable(By.cssSelector("button.btn.btn-white[type='submit']")));
        ((JavascriptExecutor) driver).executeScript("arguments[0].scrollIntoView(true);", submitButton);
        ((JavascriptExecutor) driver).executeScript("arguments[0].click();", submitButton);

        Thread.sleep(1000);
        
        System.out.println("Submitted the form");
        
        
        Thread.sleep(3000);
		WebElement modalContent2 = wait.until(ExpectedConditions.visibilityOfElementLocated(By.className("modal-content")));
		Assertions.assertTrue(modalContent2.isDisplayed(), "Model content is not displayed.");
        System.out.println("Success: Model content is displayed.");
        Thread.sleep(3000);
		WebElement closeButton2 = wait.until(ExpectedConditions.elementToBeClickable(
                By.xpath(".//div[contains(@class,'modal-dialog')]//button[contains(@class, 'btn-primary') and normalize-space(text())='Close']")));
		closeButton2.click();
		Thread.sleep(3000);
		
		WebElement dropdownToggle2 = wait.until(ExpectedConditions.elementToBeClickable(
			    By.xpath("//a[@class='nav-link dropdown-toggle text-white text-truncate' and @data-bs-toggle='dropdown']")));
			dropdownToggle2.click();

			
		WebElement yourAppointmentLink2 = wait.until(ExpectedConditions.elementToBeClickable(
			    By.xpath("//a[@class='dropdown-item' and @href='/your-appointments']")));
		yourAppointmentLink2.click();
			Thread.sleep(3000);
			
			System.out.println("Navigated to your-orders");
			
		WebElement appointmentDetails2 = driver.findElement(By.xpath("//small[contains(., 'Name : Peter Parker')]"));
		String detailsText2 = appointmentDetails2.getText();
		String actualName2 = detailsText2.split(":")[1].trim();
		assertEquals("Peter Parker", actualName2, "Appointment name does not match expected value");
		
		System.out.println("SUCCESS: An appointment is scheduled for Peter Parker");
    }
    
    
    @Test
    @Order(7)
    public void petparkTest() throws InterruptedException, TimeoutException {
    	
    	WebElement usernameField = wait.until(ExpectedConditions.elementToBeClickable(By.name("email")));
        usernameField.sendKeys("john123@gmail.com");
        
        WebElement passwordField = wait.until(ExpectedConditions.elementToBeClickable(By.name("password")));
        passwordField.sendKeys("jw123123");
        
        WebElement loginButton = wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//button[@type='submit' and text()='Login']")));
        loginButton.click();
         System.out.println("Successfully logged in and Navigated to Home page");
         
    	WebElement serviceLink = wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//a[@href='/services']")));
        serviceLink.click();
        Thread.sleep(1000);
        System.out.println("navigated to service page");
        
        WebElement readMoreLink = wait.until(ExpectedConditions.elementToBeClickable(By.cssSelector("a.text-primary.text-uppercase[href='/parks']")));
        readMoreLink.click();
        Thread.sleep(2000); 
        
        System.out.println("navigated to NEAREST PET PARK");
        
        WebElement bookAppointmentLink = wait.until(ExpectedConditions.elementToBeClickable(By.cssSelector("a.text-primary.text-uppercase[href='/appointment']")));
        ((JavascriptExecutor) driver).executeScript("arguments[0].scrollIntoView(true);", bookAppointmentLink);
        ((JavascriptExecutor) driver).executeScript("arguments[0].click();", bookAppointmentLink);

        Thread.sleep(1000);
        
        System.out.println("navigated to GET RECOMMENDATIONS page");
        
        
        WebElement nameInput2 = driver.findElement(By.name("username"));
        nameInput2.sendKeys("Tony Stark");
        Thread.sleep(1000);
        
        WebElement emailInput2 = driver.findElement(By.name("email"));
        emailInput2.sendKeys("tony@gmail.com");
        Thread.sleep(1000);
        
        
        WebElement messageInput2 = driver.findElement(By.name("message"));
        messageInput2.sendKeys("I'd love to get Recommendations for pet parks");
        Thread.sleep(1000);
        
        System.out.println("Filled the form to book an appointment for pet parks");
        
        WebElement submitButton = wait.until(ExpectedConditions.elementToBeClickable(By.cssSelector("button.btn.btn-white[type='submit']")));
        ((JavascriptExecutor) driver).executeScript("arguments[0].scrollIntoView(true);", submitButton);
        ((JavascriptExecutor) driver).executeScript("arguments[0].click();", submitButton);

        Thread.sleep(1000);
        
        System.out.println("Submitted the form");
        
        
        Thread.sleep(3000);
		WebElement modalContent2 = wait.until(ExpectedConditions.visibilityOfElementLocated(By.className("modal-content")));
		Assertions.assertTrue(modalContent2.isDisplayed(), "Model content is not displayed.");
        System.out.println("Success: Model content is displayed.");
        Thread.sleep(3000);
		
        WebElement closeButton2 = wait.until(ExpectedConditions.elementToBeClickable(
                By.xpath(".//div[contains(@class,'modal-dialog')]//button[contains(@class, 'btn-primary') and normalize-space(text())='Close']")));
		closeButton2.click();
		Thread.sleep(3000);
    }
    
    
    
    
    @Test
    @Order(8)
    public void testPharmacy() throws InterruptedException, TimeoutException {
    	WebElement usernameField = wait.until(ExpectedConditions.elementToBeClickable(By.name("email")));
        usernameField.sendKeys("john123@gmail.com");
        
        WebElement passwordField = wait.until(ExpectedConditions.elementToBeClickable(By.name("password")));
        passwordField.sendKeys("jw123123");
        
        WebElement loginButton = wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//button[@type='submit' and text()='Login']")));
        loginButton.click();
        System.out.println("Successfully logged in and Navigated to Home page");
        
        WebElement pharmacyLink = wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//a[@href='/pharmacy']")));
		pharmacyLink.click();
        Thread.sleep(1000);
        
        System.out.println("navigated to pharmacy");
        
        WebElement addToCartButton2 = wait.until(ExpectedConditions.elementToBeClickable(By.cssSelector("div.btn.btn-primary.py-2.px-3")));
        addToCartButton2.click();
        Thread.sleep(1000); 
        System.out.println("Success: First item added to cart.");
        
        WebElement cartLink = wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//a[@href='/cart']")));   
        cartLink.click();
        Thread.sleep(1000); 
        System.out.println("Navigated to cart.");
        
        WebElement milbemaxDogElement = wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//h5[contains(text(),'Milbemax dog')]")));
        Assertions.assertTrue(milbemaxDogElement.getText().contains("Milbemax dog"), "Milbemax dog is not present in the cart.");
        System.out.println("Success: Milbemax dog added to cart.");
        
    }
    
    @Test
    @Order(9)
    public void buyCart() throws InterruptedException, TimeoutException {
    	WebElement usernameField = wait.until(ExpectedConditions.elementToBeClickable(By.name("email")));
        usernameField.sendKeys("john123@gmail.com");
        
        WebElement passwordField = wait.until(ExpectedConditions.elementToBeClickable(By.name("password")));
        passwordField.sendKeys("jw123123");
        
        WebElement loginButton = wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//button[@type='submit' and text()='Login']")));
        loginButton.click();
        System.out.println("Successfully logged in and Navigated to Home page");
         
        WebElement productsLink = wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//a[@href='/products']")));
        productsLink.click();
        Thread.sleep(1000);
         
        System.out.println("Success: Navigated to Products page.");
         
        WebElement addToCartButton = wait.until(ExpectedConditions.elementToBeClickable(By.cssSelector("div.btn.btn-primary.py-2.px-3")));
        addToCartButton.click();
        Thread.sleep(1000); 
        System.out.println("Success: First item added to cart.");
         
        WebElement pharmacyLink = wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//a[@href='/cart']")));
 		pharmacyLink.click();
        Thread.sleep(1000);
         
        System.out.println("navigated to cart");
         
         
        WebElement radioBtn = wait.until(ExpectedConditions.elementToBeClickable(By.id("inlineRadio1")));
        ((JavascriptExecutor) driver).executeScript("arguments[0].scrollIntoView(true);", radioBtn);
        ((JavascriptExecutor) driver).executeScript("arguments[0].click();", radioBtn);
        
        Thread.sleep(1000);
        
        WebElement addressDropdown = driver.findElement(By.name("address"));
        Select addressSelect = new Select(addressDropdown);
        addressSelect.selectByVisibleText("412 Summit Ave, Arlington, TX 76013, USA");
        Thread.sleep(1000);
        
        WebElement accountNumberInput = driver.findElement(By.name("cardNumber"));
        accountNumberInput.clear();
        String accountNumber = "1234567812341234";
        accountNumberInput.sendKeys(accountNumber);
        Thread.sleep(1000);
        
        WebElement nameOnCardInput = driver.findElement(By.name("nameOnTheCard"));
        nameOnCardInput.sendKeys("Tony Stark");
        Thread.sleep(1000);
        
        WebElement cvv = driver.findElement(By.name("cvv"));
        cvv.sendKeys("893");
        Thread.sleep(1000);
        
        WebElement expiryDate = driver.findElement(By.name("expiryDate"));
        expiryDate.sendKeys("09/25");
        Thread.sleep(1000);
        
        WebElement payNowButton = driver.findElement(By.xpath("//button[contains(text(), 'Pay Now')]"));
        payNowButton.click();
        Thread.sleep(1000);
        Thread.sleep(3000);
		
        WebElement modalContent = wait.until(ExpectedConditions.visibilityOfElementLocated(By.className("modal-content")));
		Assertions.assertTrue(modalContent.isDisplayed(), "Model content is not displayed.");
        System.out.println("Success: Model content is displayed.");
        Thread.sleep(3000);
		
        WebElement closeButton = wait.until(ExpectedConditions.elementToBeClickable(
                By.xpath(".//div[contains(@class,'modal-dialog')]//button[contains(@class, 'btn-primary') and normalize-space(text())='Close']")));
		closeButton.click();
		Thread.sleep(3000);
        System.out.println("Paid successfully for items in the cart");
        
			
			
		System.out.println("Navigated to your-orders");
		
		boolean isDurableChewBonePresent = !driver.findElements(By.xpath("//*[contains(text(), 'Bouncy Rubber Fetch Ball')]")).isEmpty();
		assert isDurableChewBonePresent : "The text 'Bouncy Rubber Fetch Ball' is not present on the page.";
		System.out.println("Bouncy Rubber Fetch Ball is present in your-orders");
    }
    
    @Test
    @Order(10)
    public void registrationDuplicateTest() throws InterruptedException, TimeoutException {
    
        WebElement registerLink = wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//a[@href='/register']")));
        registerLink.click();
        Thread.sleep(1000);
        System.out.println("navigated to Registration Page");
        
        WebElement fnInput = driver.findElement(By.name("firstname"));
        fnInput.sendKeys("John");
        Thread.sleep(1000);
        
        WebElement lnInput = driver.findElement(By.name("lastname"));
        lnInput.sendKeys("Wick");
        Thread.sleep(1000);
        
        WebElement emailInput = driver.findElement(By.name("email"));
        emailInput.sendKeys("john123@gmail.com");
        Thread.sleep(1000);
        
        WebElement passwordInput = driver.findElement(By.name("password"));
        passwordInput.sendKeys("jw123123");
        Thread.sleep(1000);
        
       
        
        WebElement registerButton = wait.until(ExpectedConditions.elementToBeClickable(By.cssSelector("button.btn.btn-primary.w-100.py-3[type='submit']")));

        registerButton.click();
        Thread.sleep(1000);
        
        wait.until(ExpectedConditions.invisibilityOfElementLocated(By.cssSelector("div.loading-spinner")));

        
        WebElement ErrorElement = wait.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector("div.alert-danger")));
        ((JavascriptExecutor) driver).executeScript("arguments[0].scrollIntoView(true);", ErrorElement);
        ((JavascriptExecutor) driver).executeScript("arguments[0].click();", ErrorElement);
        
        Assertions.assertTrue(ErrorElement.getText().contains("Invalid Email or Email Already Exists"), "Registration is failing for Duplicate Email");

        Thread.sleep(1000);
        
        String expectedUrlAfterRegistration = "http://localhost:3000/register";
        wait.until(ExpectedConditions.urlToBe(expectedUrlAfterRegistration));
        String actualUrlAfterLogin = driver.getCurrentUrl();
        Assertions.assertEquals(expectedUrlAfterRegistration, actualUrlAfterLogin, "The URLs do not match after Registration.");
        System.out.println("Success: The URLs match after Registration Duplicated, Navigated to same Page.");
    }
    
    
    @AfterEach
    public void tearDown() {
        if (driver != null) {
            driver.quit();
        }
    }
}
