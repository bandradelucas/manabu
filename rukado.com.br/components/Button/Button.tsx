import classNames from "classnames";
import { ReactNode } from "react";

interface Props {
  type?: 'button' | 'submit'
  color?: 'primary' | 'default',
  full?: boolean;
  onClick?: () => void;
  children: ReactNode
}

const colors = {
  'primary': 'bg-rose-400',
  'default': 'bg-gray-400'
}

export function Button({ children, type = "button", color, full, ...props }: Props) {
  return (
    <button className={classNames(
      'p-2',
      colors[color || 'default'],
      {
        'w-full': full,
      }
    )}
      type={type}
      {...props}
    >
      {children}
    </button >
  );
}