import cx from "clsx";
import { useButtonStyles } from "@/components/shared/Button/Button.styles";

interface Props {
  children: React.ReactNode;
  className?: string;
  onClick: VoidFunction;
  disabled?: boolean;
  fullWidth?: boolean;
}

export function Button({
  children,
  className,
  onClick,
  disabled,
  fullWidth,
}: Props) {
  const classes = useButtonStyles();

  const rootClasses = cx(
    classes.root,
    {
      [classes.disabled]: disabled,
      [classes.rootFullWidth]: fullWidth,
    },
    className,
  );

  return (
    <button
      type="button"
      disabled={disabled}
      className={rootClasses}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
