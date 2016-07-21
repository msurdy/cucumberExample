package geoPlace.cucumber;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;



public class steps {
	
	private AddressEditor editor;
	private String status;
	
	@Given("The form is open for editing$")
	public void form_is_open_for_editing() {
	}
	
	
	@When("^I put into values:(.*),(.*),(.*),(.*)$")
	public void I_put_values_post_code_city_street_houseNumber(String postCode, String city, String street, String houseNumber) {		
		editor = new AddressEditor(postCode, city, street, houseNumber);			
	}
	
	@When("^I submit$")
	public void I_submit(){
		status = editor.submit();
	}
	
	@Then("The submit action result should be (.*)$")
	public void submit_action_result_should_be(String expectedStatus){
		if(status==expectedStatus){
			assert true;
		}
		else{assert false;}
	}
	
	

}
