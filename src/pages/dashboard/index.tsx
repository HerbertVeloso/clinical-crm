import Head from "next/head";
import { signOut, getSession, GetSessionParams } from "next-auth/react";

interface DashboardProps {}

export default function Dashboard() {
  return (
    <>
      <Head>
        <title>Dashboard | Clinical CRM</title>
      </Head>
      <main>
        <h1>Logado</h1>
        <button type="button" onClick={() => signOut()}>
          Sair
        </button>
      </main>
    </>
  );
}
