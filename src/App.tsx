import "~/presentation/i18n/setup";
import "~/presentation/styles/reset.css";
import {
  StylingProps,
  ThemeProvider,
} from "~/presentation/styles/ThemeProvider";
import { Dashboard } from "~/presentation/pages/Dashboard";

interface Props {
  styling?: StylingProps;
}

export function App({ styling }: Props) {
  return (
    <ThemeProvider theme={styling?.theme} generateId={styling?.generateId}>
      <Dashboard />
    </ThemeProvider>
  );
}
