import {
    PublicClientApplication,
    InteractionRequiredAuthError,
  } from "@azure/msal-browser";
  
  const msalConfig = {
    auth: {
      clientId: "9f39d599-871c-4b27-a142-971d8ea08d56",
      authority: `https://login.microsoftonline.com/ab3ff91d-e10f-425e-b177-3b4548adbb61`,
    },
    cache: {
      cacheLocation: "localStorage",
      storeAuthStateInCookie: true,
      secureCookies: true,
    },
  };
  
  const silentRequest = {
    scopes: ["api://9f39d599-871c-4b27-a142-971d8ea08d56/user_impersonation"],
    forceRefresh: false,
  };
  
  const refreshRequest = {
    scopes: ["api://9f39d599-871c-4b27-a142-971d8ea08d56/user_impersonation"],
    forceRefresh: true,
  };
  
  export default class MsalAuth {
    constructor() {
      this.msalInstance = new PublicClientApplication(msalConfig);
      this.account = undefined;
      this.token = undefined;
    }
  
    getAccount() {
      return this.account;
    }
  
    async setActiveAccount() {
      const accounts = this.msalInstance.getAllAccounts();
      if (accounts.length == 0) {
        return;
      }
      this.account = accounts[0];
      this.msalInstance.setActiveAccount(this.account);
    }
  
    async silentAuth() {
      this.setActiveAccount();
      const tokenResponse = await this.msalInstance
        .acquireTokenSilent(silentRequest)
        .catch(async (error) => {
          if (error instanceof InteractionRequiredAuthError) {
            return await this.msalInstance
              .acquireTokenRedirect(refreshRequest)
              .catch(() => console.error("Unavailable token"));
          }
        });
      return tokenResponse?.accessToken;
    }
  
    async signIn() {
      await this.msalInstance
        .loginPopup(silentRequest)
        .then((data) => {
          const accounts = this.msalInstance.getAllAccounts();
          this.account = accounts[0];
          this.token = data.accessToken;
        })
        .catch((error) => {
          console.error(`error during authentication: ${error}`);
        });
      return this.token;
    }
  
    async signOut() {
      await this.msalInstance
        .logoutRedirect({
          onRedirectNavigate: () => {
            return false;
          },
        })
        .then(() => {
          this.account = undefined;
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }