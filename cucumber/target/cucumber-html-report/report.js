$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("geoPlace/cucumber/EditAddress.feature");
formatter.feature({
  "line": 1,
  "name": "Edit building address",
  "description": "\r\nThis feature allow the user to edit address of existing building through the web form.\r\nUser must provide all fields to submit successful. No other rules applies. \r\n\r\nProperties:\r\npostCode\r\ncity\r\nstreet\r\nhouseNumber",
  "id": "edit-building-address",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 22,
  "name": "Provide the parameters",
  "description": "",
  "id": "edit-building-address;provide-the-parameters;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "The form is open for editing",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I put into values:postCode,city,street,houseNumber",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I submit",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "The submit action result should be OK",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "steps.form_is_open_for_editing()"
});
formatter.result({
  "duration": 233055776,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "postCode",
      "offset": 18
    },
    {
      "val": "city",
      "offset": 27
    },
    {
      "val": "street",
      "offset": 32
    },
    {
      "val": "houseNumber",
      "offset": 39
    }
  ],
  "location": "steps.I_put_values_post_code_city_street_houseNumber(String,String,String,String)"
});
formatter.result({
  "duration": 8782140,
  "status": "passed"
});
formatter.match({
  "location": "steps.I_submit()"
});
formatter.result({
  "duration": 69703,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "OK",
      "offset": 35
    }
  ],
  "location": "steps.submit_action_result_should_be(String)"
});
formatter.result({
  "duration": 192432,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Provide the parameters",
  "description": "",
  "id": "edit-building-address;provide-the-parameters;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "The form is open for editing",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I put into values:,city,street,houseNumber",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I submit",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "The submit action result should be NOK",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "steps.form_is_open_for_editing()"
});
formatter.result({
  "duration": 144109,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 18
    },
    {
      "val": "city",
      "offset": 19
    },
    {
      "val": "street",
      "offset": 24
    },
    {
      "val": "houseNumber",
      "offset": 31
    }
  ],
  "location": "steps.I_put_values_post_code_city_street_houseNumber(String,String,String,String)"
});
formatter.result({
  "duration": 363481,
  "status": "passed"
});
formatter.match({
  "location": "steps.I_submit()"
});
formatter.result({
  "duration": 38914,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NOK",
      "offset": 35
    }
  ],
  "location": "steps.submit_action_result_should_be(String)"
});
formatter.result({
  "duration": 116741,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Provide the parameters",
  "description": "",
  "id": "edit-building-address;provide-the-parameters;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "The form is open for editing",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I put into values:postCode,,street,houseNumber",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I submit",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "The submit action result should be NOK",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "steps.form_is_open_for_editing()"
});
formatter.result({
  "duration": 188155,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "postCode",
      "offset": 18
    },
    {
      "val": "",
      "offset": 27
    },
    {
      "val": "street",
      "offset": 28
    },
    {
      "val": "houseNumber",
      "offset": 35
    }
  ],
  "location": "steps.I_put_values_post_code_city_street_houseNumber(String,String,String,String)"
});
formatter.result({
  "duration": 353218,
  "status": "passed"
});
formatter.match({
  "location": "steps.I_submit()"
});
formatter.result({
  "duration": 39342,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NOK",
      "offset": 35
    }
  ],
  "location": "steps.submit_action_result_should_be(String)"
});
formatter.result({
  "duration": 150524,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Provide the parameters",
  "description": "",
  "id": "edit-building-address;provide-the-parameters;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "The form is open for editing",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I put into values:postCode,city,,houseNumber",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I submit",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "The submit action result should be NOK",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "steps.form_is_open_for_editing()"
});
formatter.result({
  "duration": 172761,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "postCode",
      "offset": 18
    },
    {
      "val": "city",
      "offset": 27
    },
    {
      "val": "",
      "offset": 32
    },
    {
      "val": "houseNumber",
      "offset": 33
    }
  ],
  "location": "steps.I_put_values_post_code_city_street_houseNumber(String,String,String,String)"
});
formatter.result({
  "duration": 227496,
  "status": "passed"
});
formatter.match({
  "location": "steps.I_submit()"
});
formatter.result({
  "duration": 37203,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NOK",
      "offset": 35
    }
  ],
  "location": "steps.submit_action_result_should_be(String)"
});
formatter.result({
  "duration": 124011,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Provide the parameters",
  "description": "",
  "id": "edit-building-address;provide-the-parameters;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "The form is open for editing",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I put into values:postCode,city,street,",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I submit",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "The submit action result should be NOK",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "steps.form_is_open_for_editing()"
});
formatter.result({
  "duration": 177037,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "postCode",
      "offset": 18
    },
    {
      "val": "city",
      "offset": 27
    },
    {
      "val": "street",
      "offset": 32
    },
    {
      "val": "",
      "offset": 39
    }
  ],
  "location": "steps.I_put_values_post_code_city_street_houseNumber(String,String,String,String)"
});
formatter.result({
  "duration": 223648,
  "status": "passed"
});
formatter.match({
  "location": "steps.I_submit()"
});
formatter.result({
  "duration": 56019,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NOK",
      "offset": 35
    }
  ],
  "location": "steps.submit_action_result_should_be(String)"
});
formatter.result({
  "duration": 157366,
  "status": "passed"
});
});