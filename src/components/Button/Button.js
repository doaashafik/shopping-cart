import { Button } from "antd";

const ButtonControl = (props) => {
return <Button {...props}>{props.label}</Button>;
};

export default ButtonControl;
