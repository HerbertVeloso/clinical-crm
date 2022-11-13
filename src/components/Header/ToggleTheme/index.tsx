import { ToggleWrapper } from "./styles";
import { Sun, Moon } from "phosphor-react";
import { useTheme } from "../../../hooks/useTheme";

export function ToggleTheme() {
  const { isDark, toggleTheme, colors } = useTheme();

  return (
    <ToggleWrapper>
      <input type="checkbox" checked={isDark} onChange={toggleTheme} />
      <span />
      <Moon size={16} color="#FEFCD7" />
      <Sun size={16} color={colors.yellow} />
    </ToggleWrapper>
  );
}
