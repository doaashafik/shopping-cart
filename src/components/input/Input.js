import { Input } from "antd";

export const InputControl = (props) => {
  const {
    field: { name,value, placeholder, type },
    form: { setFieldValue },
  } = props;
  return (
    <Input
      value={value}
      name={name}
      type={type}
      placeholder={placeholder}
      onChange={(event) => setFieldValue(name, event.target.value)}
    />
  );
};
