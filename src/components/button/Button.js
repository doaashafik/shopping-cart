import { Button } from "antd";

const ButtonControl = (props) => {
  const { content, type, onClick } = props;
  return (
    <Button onClick={onClick} htmlType={type}>
      {content}
    </Button>
  );
};

export default ButtonControl;
