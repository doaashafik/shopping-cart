import { Input } from "antd";

export const InputControl = (props) => {
  const {
    field: { value, name },
    type,
    placeholder,
    className,
    form: { setFieldValue },
  } = props;
  return (
    <Input
      name={name}
      className={className}
      value={value}
      type={type}
      placeholder={placeholder}
      onChange={(event) => setFieldValue(name, event.target.value)}
    />
  );
};
