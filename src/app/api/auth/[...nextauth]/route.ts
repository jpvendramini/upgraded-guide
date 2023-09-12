import NextAuth from "next-auth";
import KeycloakProvider from "next-auth/providers/keycloak";
import jwt_decode from "jwt-decode";
import { encrypt } from "@/utils/encryption";

// this will refresh an expired access token, when needed
async function refreshAccessToken(token: any) {
  const urlencoded = new URLSearchParams();
  urlencoded.append(
    "client_id",
    `${process.env.NEXT_PUBLIC_DEMO_FRONTEND_CLIENT_ID}`
  );
  urlencoded.append(
    "client_secret",
    `${process.env.NEXT_PUBLIC_DEMO_FRONTEND_CLIENT_SECRET}`
  );
  urlencoded.append("grant_type", `refresh_token`);
  urlencoded.append("refresh_token", token.refresh_token);
  const resp = await fetch(`${process.env.NEXT_PUBLIC_REFRESH_TOKEN_URL}`, {
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: urlencoded,
    method: "POST",
  });
  const refreshToken = await resp.json();
  if (!resp.ok) throw refreshToken;

  return {
    ...token,
    access_token: refreshToken.access_token,
    decoded: jwt_decode(refreshToken.access_token),
    id_token: refreshToken.id_token,
    expires_at: Math.floor(Date.now() / 1000) + refreshToken.expires_in,
    refresh_token: refreshToken.refresh_token,
  };
}

export const authOptions = {
  providers: [
    KeycloakProvider({
      id: "keycloak",
      clientId: `****CONFIDENTIAL****`,
      clientSecret: `****CONFIDENTIAL****`,
      issuer: `****CONFIDENTIAL****`,
      checks: "pkce",
    }),
  ],

  callbacks: {
    async jwt({ token, account }: any) {
      const nowTimeStamp = Math.floor(Date.now() / 1000);

      if (account) {
        // account is only available the first time this callback is called on a new session (after the user signs in)
        token.decoded = jwt_decode(account.access_token);
        token.access_token = account.access_token;
        token.id_token = account.id_token;
        token.expires_at = account.expires_at;
        token.refresh_token = account.refresh_token;
        return token;
      } else if (nowTimeStamp < token.expires_at) {
        // token has not expired yet, return it
        return token;
      } else {
        // token is expired, try to refresh it
        console.log("Token has expired. Will refresh...");
        try {
          const refreshedToken = await refreshAccessToken(token);
          console.log("Token is refreshed.");
          return refreshedToken;
        } catch (error) {
          console.error("Error refreshing access token", error);
          return { ...token, error: "RefreshAccessTokenError" };
        }
      }
    },
    async session({ session, token }: any) {
      // Send properties to the client
      session.access_token = encrypt(token.access_token); // see utils/sessionTokenAccessor.js
      session.id_token = encrypt(token.id_token); // see utils/sessionTokenAccessor.js
      session.roles = token.decoded.realm_access.roles;
      session.error = token.error;
      return session;
    },
    pages: {
      signIn: "/login",
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
