package geoPlace.cucumber;

public class AddressEditor {
	
	String postCode;
	String city;
	String street;
	String houseNumber;
	
	public AddressEditor(String postCode, String city, String street, String houseNumber){
		this.postCode=postCode;
		this.city=city;
		this.street=street;
		this.houseNumber=houseNumber;
	}
	
	public String submit(){
		String submitResult;
		if(postCode=="" || city=="" || street=="" || houseNumber==""){
			submitResult="NOK";
		}
		else{
			submitResult="OK";
		}
		return submitResult;
		
	}
	/*
	public static void main(String args[]){  
		AddressEditor editor=new AddressEditor("postCode", "", "street", "houseNumber");
		String status = editor.submit();
		System.out.println(status);
	}
	*/
}
