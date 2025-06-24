import LabelledInput, { type LabelledInputProps } from "./labelled-input";

export interface EmailFormProps
  extends Omit<
    LabelledInputProps,
    "type" | "placeholder" | "pattern" | "title" | "autoComplete"
  > {}

export default function EmailForm(props: EmailFormProps) {
  return (
    <LabelledInput
      {...props}
      type="email"
      placeholder="name@example.com"
      pattern="^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$"
      title="Please enter a valid email"
      autoComplete="email"
    />
  );
}
