import { Theme } from "@/styles/config";
import { createUseStyles } from "react-jss";

export const useButtonStyles = createUseStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    border: "none",
    color: theme.palette.white.main,
    padding: "5px 20px",
    fontSize: "15px",
    fontWeight: "bold",
    borderRadius: "2px",
    cursor: "pointer",
    userSelect: "none",
    width: "max-content",
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
    },
  },
  rootFullWidth: {
    width: "100%",
  },
  disabled: {
    cursor: "default",
    pointerEvents: "none",
    opacity: 0.8,
  },
}));
