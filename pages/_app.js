import "../styles/globals.css";
import { ThemeProvider, ColorModeProvider, CSSReset } from "@chakra-ui/core";
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }) {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  return (
    <ThemeProvider>
      <ColorModeProvider>
        <CSSReset />
        {isMounted && <Component {...pageProps} />}
      </ColorModeProvider>
    </ThemeProvider>
  );
}

export default MyApp;
