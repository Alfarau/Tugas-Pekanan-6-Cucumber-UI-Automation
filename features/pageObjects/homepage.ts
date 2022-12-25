export const login = {
    field : {
        username : "#user-name",
        password : "#password",
    },
    btnLogin : '#login-button',
    titleProduct : '//*[@id="header_container"]/div[2]/span',
    btnLogout : "//a[@href='/parabank/logout.htm'][contains(.,'Log Out')]",
    btnAddtoCart : "#add-to-cart-sauce-labs-backpack",
    btnCloseErrorMsg : "#login-button",
    errorMsg : "#login_button_container > div > form > div.error-message-container.error > h3"
}

export const register = {
    field : {
        firstName : "input[name='customer.firstName']",
        lastName : "input[name='customer.lastName']",
        address : "input[name='customer.address.street']",
        city : "input[name='customer.address.city']",
        state : "input[name='customer.address.state']",
        zipCode : "input[name='customer.address.zipCode']",
        phone : "input[name='customer.phoneNumber']",
        ssn : "input[name='customer.ssn']",
        username : "input[name='customer.username']",
        password : "input[name='customer.password']",
        confirm : "input[name='repeatedPassword']",
    },
    btnRegister : '//*[@id="customerForm"]/table/tbody/tr[13]/td[2]/input',
    linkRegister : '//*[@id="loginPanel"]/p[2]/a',
    txtRegSuccess : "//p[contains(.,'Your account was created successfully. You are now logged in.')]",
    errorFirstname : "#customer\.firstName\.errors",
    errorLastname : "#customer\.lastName\.errors",
}

export const homepage = {
    login,register
}