import { notification } from 'antd';
export const Notification = (props) => {
  const [api, contextHolder] = notification.useNotification();

  const openNotification = ({ message, title}) => {
    api.success({
      message: 'ADD ITEM',
      description: `${title} ${message}`,
      duration: 3,
      placement: 'topRight',
    });
  };

  return (
      <>
       {contextHolder}
          {props.children({ notifiy: openNotification })}
      </>
  );
};
