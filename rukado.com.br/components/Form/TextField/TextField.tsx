import { ChangeEvent } from "react";

interface Props {
  name?: string;
  value: string;
  placeholder?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export function TextField({ onChange, ...props }: Props) {
  return (
    <input type="text" className="p-2 border"
      onChange={onChange}
      {...props} />
  )
}