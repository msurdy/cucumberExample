Feature: Edit building address
	
	This feature allow the user to edit address of existing building through the web form.
	User must provide all fields to submit successful. No other rules applies. 
	
	Properties:
	postCode
	city
	street
	houseNumber

Scenario Outline: Provide the parameters
		Given The form is open for editing
		When I put into values:<postCode>,<city>,<street>,<houseNumber>
		And I submit
		Then The submit action result should be <submitResult>
	
	
	
	Examples:
		| postCode | city | street | houseNumber | submitResult |
		| postCode | city | street | houseNumber | OK		    |
		|          | city | street | houseNumber | NOK          |
		| postCode |      | street | houseNumber | NOK          |
		| postCode | city |        | houseNumber | NOK          |
		| postCode | city | street |             | NOK          |

