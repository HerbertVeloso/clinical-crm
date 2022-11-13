import { useSession, signIn, signOut } from "next-auth/react";

import { ToggleTheme } from "./ToggleTheme";

import { HeaderWrapper, Actions, Button, Title } from "./styles";

export function Header() {
  const { data: session } = useSession();

  return (
    <HeaderWrapper>
      <Title>Clinical CRM</Title>
      <Actions>
        <ToggleTheme />
        {!session ? (
          <Button onClick={() => signIn("google")}>Entrar</Button>
        ) : (
          <Button isDanger onClick={() => signOut()}>
            Sair
          </Button>
        )}
      </Actions>
    </HeaderWrapper>
  );
}
