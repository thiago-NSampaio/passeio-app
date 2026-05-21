import { AuthConfig } from "angular-oauth2-oidc";

export const auth: AuthConfig = {
    issuer: 'https://accounts.google.com',
    redirectUri: window.location.origin,
    clientId: '102312322767-oimjtu428f17ngf0fv75u56590b4o9hl.apps.googleusercontent.com',
    scope: 'openid profile email',
    strictDiscoveryDocumentValidation: false
}