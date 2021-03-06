package cucumberTest;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="src/test/resources/Requirement/homepage.feature",
glue="stepDefinition",
dryRun=false,
plugin= {"pretty","html:Report/homereport"},
tags={"@Regression,@smoke"})
public class TestRunner {

}
