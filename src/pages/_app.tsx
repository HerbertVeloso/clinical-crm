import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";

import { ThemeProvider } from "../contexts/ThemeContext";
import CreateGlobalStyle from "../styles/global";
import { Header } from "../components/Header";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <ThemeProvider>
        <CreateGlobalStyle />
        <Header />
        <Component {...pageProps} />
      </ThemeProvider>
    </SessionProvider>
  );
}
