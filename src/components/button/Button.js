import { Button } from "antd";

const ButtonControl = (props) => {
  const { content, type } = props;
  return (
    <Button htmlType={type}>
      {content}
    </Button>
  );
};

export default ButtonControl;
