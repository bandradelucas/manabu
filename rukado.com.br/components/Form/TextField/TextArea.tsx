import classNames from "classnames";
import { ChangeEvent, useRef } from "react";

interface Props {
  name?: string;
  value: string;
  placeholder?: string;
  full?: boolean;
  rows?: number;
  onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}

export function TextArea({ onChange, full, ...props }: Props) {
  const ref = useRef<HTMLTextAreaElement | null>(null);

  return (
    <textarea ref={ref} className={classNames('p-2 border', {
      'w-full': full,
    })}
      onChange={onChange}
      {...props} />
  )
}