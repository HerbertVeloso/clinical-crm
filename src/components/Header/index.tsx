import { useSession, signIn, signOut } from "next-auth/react";
import { Activity } from "phosphor-react";

import { ToggleTheme } from "./ToggleTheme";

import { HeaderWrapper, Actions, Button, Title } from "./styles";

export function Header() {
  const { data: session } = useSession();

  return (
    <HeaderWrapper>
      <Title>
        <Activity weight="bold" />
        <strong>Clinical CRM</strong>
      </Title>
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
