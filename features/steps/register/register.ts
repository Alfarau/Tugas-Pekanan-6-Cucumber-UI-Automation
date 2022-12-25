import { Given, When, Then } from '@wdio/cucumber-framework'
import { homepage } from '../../pageObjects/homepage'

Given(/^Open Parabank homepage$/, async function () {
    console.log('Before opening homepage...');
    await browser.url("https://parabank.parasoft.com/")
    await browser.pause(1000)
    console.log('After opening homepage...');
})
When(/^I click link Register$/, async function(){
    await (await $(homepage.register.linkRegister)).click();
})
When(/^I input first name (.*)$/, async function (firstname) {
    await (await $(homepage.register.field.firstName)).setValue(firstname)
})
When(/^I input last name (.*)$/, async function (lastname) {
    await (await $(homepage.register.field.lastName)).setValue(lastname)
})
When(/^I input address (.*)$/, async function (street) {
    await (await $(homepage.register.field.address)).setValue(street)
})
When(/^I input city (.*)$/, async function (city) {
    await (await $(homepage.register.field.city)).setValue(city)
})
When(/^I input state (.*)$/, async function (state) {
    await (await $(homepage.register.field.state)).setValue(state)
})
When(/^I input zip (.*)$/, async function (zip) {
    await (await $(homepage.register.field.zipCode)).setValue(zip)
})
When(/^I input phone (.*)$/, async function (phone) {
    await (await $(homepage.register.field.phone)).setValue(phone)
})
When(/^I input ssn (.*)$/, async function (ssn) {
    await (await $(homepage.register.field.ssn)).setValue(ssn)
})
When(/^I input username (.*)$/, async function (reguser) {
    await (await $(homepage.register.field.username)).setValue(reguser)
})
When(/^I input password (.*)$/, async function (regpass) {
    await (await $(homepage.register.field.password)).setValue(regpass)
})
When(/^I input confirm password (.*)$/, async function (repeatpass) {
    await (await $(homepage.register.field.confirm)).setValue(repeatpass)
})
When(/^I click register button$/, async function(){
    await (await $(homepage.register.btnRegister)).click();
})
Then(/^I click logout button$/, async function () {
    await (await $(homepage.login.btnLogout)).click();
})