import { JssProvider, ThemeProvider as JssThemeProvider } from "react-jss";
import { Theme, THEME } from "@/presentation/styles/config";

export interface StylingProps {
  theme?: Theme;
  generateId?: () => string;
}

interface Props extends StylingProps {
  children: React.ReactNode;
}

export function ThemeProvider({ children, theme, generateId }: Props) {
  return (
    <JssProvider generateId={generateId}>
      <JssThemeProvider theme={theme || THEME}>{children}</JssThemeProvider>
    </JssProvider>
  );
}
