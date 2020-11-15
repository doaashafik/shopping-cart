import { Button } from "antd";

const ButtonControl = (props) => {
  const { text, type } = props;
  return <Button {...props} htmlType={type}>{text}</Button>;
};

export default ButtonControl;
