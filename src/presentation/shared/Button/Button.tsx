import classes from "~/presentation/shared/Button/Button.module.css";

interface Props {
  children: React.ReactNode;
  onClick: VoidFunction;
}

export function Button({ children, onClick }: Props) {
  return (
    <button type="button" className={classes.root} onClick={onClick}>
      {children}
    </button>
  );
}
