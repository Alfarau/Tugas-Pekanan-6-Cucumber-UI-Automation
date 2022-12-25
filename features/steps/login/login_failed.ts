import { Given, When, Then } from '@wdio/cucumber-framework'
import { homepage } from '../../pageObjects/homepage';

Given(/^Open SwagLabs homepage$/, async function () {
    console.log('Before opening homepage...');
    await browser.url("https://www.saucedemo.com/")
    await browser.pause(1000)
    console.log('After opening homepage...');
})
When(/^I input username (.*)$/, async function(username){
    await (await $(homepage.login.field.username)).setValue(username)
})
Then(/^I click login button$/, async function () {
    await (await $(homepage.login.btnLogin)).click();
})
Then(/^I can click button on error message$/, async function (message) {
    await (await $(homepage.login.btnCloseErrorMsg)).click();
})