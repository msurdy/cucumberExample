package geoPlace.cucumber;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

//Associates Cucumber - JVM with the JUnit runner
@RunWith(Cucumber.class)
@CucumberOptions(format = {"html:target/cucumber-html-report", "json:target/cucumber-json-report.json"})

public class RunTest {

}
