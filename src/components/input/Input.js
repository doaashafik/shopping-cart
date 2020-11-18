import { Input } from "antd";

export const InputControl = (props) => {
  const {
    field: { value, name },
    type,
    placeholder,
    form: { setFieldValue },
  } = props;
  return (
    <Input
      name={name}
      value={value}
      type={type}
      placeholder={placeholder}
      onChange={(event) => setFieldValue(name, event.target.value)}
    />
  );
};
