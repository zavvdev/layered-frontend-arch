import "@/index.css";
import { StylingProps, ThemeProvider } from "@/styles/ThemeProvider";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/api/client";
import { Dashboard } from "@/pages/Dashboard";

interface Props {
  styling?: StylingProps;
}

export function App({ styling }: Props) {
  return (
    <ThemeProvider theme={styling?.theme} generateId={styling?.generateId}>
      <QueryClientProvider client={queryClient}>
        <Dashboard />
      </QueryClientProvider>
    </ThemeProvider>
  );
}
