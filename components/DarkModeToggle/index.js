import { IconButton, useColorMode } from "@chakra-ui/core";
import { useEffect, useState } from "react";

const DarkModeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <IconButton
        onClick={toggleColorMode}
        aria-label="Toggle darkmode"
        icon={colorMode === "dark" ? "sun" : "moon"}
      />
    </>
  );
};

export default DarkModeToggle;
