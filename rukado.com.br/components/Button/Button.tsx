import { ReactNode } from "react";

interface Props {
  type?: 'button' | 'submit'
  onClick: () => void;
  children: ReactNode
}

export function Button({ children, type = "button", ...props }: Props) {
  return (
    <button className="bg-rose-400 p-2" type={type} {...props}>
      {children}
    </button>
  );
}