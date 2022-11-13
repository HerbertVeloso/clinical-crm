import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Clinical CRM</title>
        <meta
          name="description"
          content="Faça a gestão dos pacientes da sua clinica"
        />
      </Head>

      <h1>Clinical CRM</h1>
      <p>Gerencie os seus pacientes de forma simples e eficiente</p>
      <Link href="/signin">Entrar</Link>
    </>
  );
}
