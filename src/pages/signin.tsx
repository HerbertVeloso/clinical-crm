import Head from "next/head";
import { signIn } from "next-auth/react";
import { GoogleLogo } from "phosphor-react";

import { MainWrapper, SignInWrapper, Button } from "../styles/pages/signin";

export default function SignIn() {
  return (
    <>
      <Head>
        <title>Entrar | Clinical CRM</title>
      </Head>
      <MainWrapper>
        <SignInWrapper>
          <h1>Entrar na plataforma</h1>
          <p>
            Faça seu login para ter acessoa a todas as funcionalidades da
            plataforma
          </p>
          <Button type="button" onClick={() => signIn("google")}>
            <GoogleLogo weight="bold" />
            <span>Entrar com Google</span>
          </Button>
          <small>
            Não é necessário fazer cadastro, entre com sua conta do Google
          </small>
        </SignInWrapper>
      </MainWrapper>
    </>
  );
}
