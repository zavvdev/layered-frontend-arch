import classes from "~/presentation/components/atoms/Button/styles.module.css";

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
