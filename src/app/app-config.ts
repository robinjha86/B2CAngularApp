import { Configuration } from 'msal';
import { MsalAngularConfiguration } from '@azure/msal-angular';

// this checks if the app is running on IE
export const isIE = window.navigator.userAgent.indexOf('MSIE ') > -1 ||
                    window.navigator.userAgent.indexOf('Trident/') > -1;


/***********************************************************
  STEP 1 - Define B2C Policies and User Flows
 ***********************************************************/
export const b2cPolicies = {
  names: {
    signUpSignIn: "B2C_1_SignUpIn",
    resetPassword: "B2C_1_PasswordReset",
  },
  authorities: {
    signUpSignIn: {
      authority: "https://<your-b2c-tenant>.b2clogin.com/<your-b2c-tenant>.onmicrosoft.com/B2C_1_SignUpIn"
    },
    resetPassword: {
      authority: "https://<your-b2c-tenant>.b2clogin.com/<your-b2c-tenant>.onmicrosoft.com/B2C_1_PasswordReset"
    }
  }
}

/***********************************************************
  STEP 2 - Authentication Configurations
 ***********************************************************/
export const msalConfig: Configuration = {
  auth: {
    clientId: "<b2c-application(client)Id>",
    authority: b2cPolicies.authorities.signUpSignIn.authority,
    redirectUri: "http://localhost:4200/",
    postLogoutRedirectUri: "http://localhost:4200/",
    navigateToLoginRequestUrl: true,
    validateAuthority: false,
  },
  cache: {
    cacheLocation: "localStorage",
    // Set this to "true" to save cache in cookies
    // to address trusted zones limitations in IE
    storeAuthStateInCookie: isIE,
  },
}


/***********************************************************
  STEP 3 - Scopes Required For Login
 ***********************************************************/
export const loginRequest: { scopes: string[] } = {
  scopes: ['openid', 'profile'],
};


/***********************************************************
  STEP 4 - MSAL Angular specific configurations          
 ***********************************************************/
export const msalAngularConfig: MsalAngularConfiguration = {
  popUp: !isIE,
  consentScopes: [
    ...loginRequest.scopes
  ],
  extraQueryParameters: {}
}
