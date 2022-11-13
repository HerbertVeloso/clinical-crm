import Head from "next/head";
import { signIn } from "next-auth/react";

export default function SignIn() {
  return (
    <>
      <Head>
        <title>Entrar | Clinical CRM</title>
      </Head>
      <main>
        <h1>login</h1>
        <button type="button" onClick={() => signIn("google")}>
          <span>Entrar com Google</span>
        </button>
      </main>
    </>
  );
}
