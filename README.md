# B2CAngularApp
Authenticating angular app using Microsoft Azure Active Directory B2C

Follow microsoft Azure AD B2C document to create your B2C tenant. 
(https://docs.microsoft.com/en-us/azure/active-directory-b2c/tutorial-create-tenant)

Follow below steps to authenticate your app using microsoft AAD B2C 

1. Register your Angular App and obtained Application (client) ID on Microsoft Azure.
2. Replace this Client Id in `app-config.ts` file.
3. Create User flow `SignUpIn` and `PasswordReset`.
4. Add Identity Provider. Follow Microsoft document, link given above, to add different IDP.
5. Replace your tenant name in `app-config.ts` file.
6. Run `npm install` then `npm start`.
7. Go to `http://localhost:4200`.



