import { Input } from "../profile/node_modules/antd";

export const InputControl = (props) => {
  const {
    field: { name, type, placeholder, type },
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
