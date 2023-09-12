import { authOptions } from "../[...nextauth]/route";
import { getServerSession } from "next-auth";
import { decrypt } from "@utils/encryption";

async function getIdToken() {
  const session = await getServerSession(authOptions);
  if (session) {
    const idTokenDecrypted = decrypt(session.id_token);
    return idTokenDecrypted;
  }
  return null;
}

export async function GET() {
  const session = await getServerSession(authOptions);

  if (session) {
    const idToken = await getIdToken();

    // this will log out the user on Keycloak side
    const LOGOUT_URL = `${
      process.env.NEXT_PUBLIC_END_SESSION_URL
    }?id_token_hint=${idToken}&post_logout_redirect_uri=${encodeURIComponent(
      `${process.env.NEXTAUTH_URL}`
    )}`;

    console.log(LOGOUT_URL);

    try {
      const resp = await fetch(LOGOUT_URL, { method: "GET" });
    } catch (err) {
      console.error(err);
      return new Response(null, { status: 500 });
    }
  }
  return new Response(null, { status: 200 });
}
