import { notification } from 'antd';

export  const open = ({ message, title}) => {
  notification.open({
    message: 'ADD ITEM',
    description: `${title} ${message}`,
    duration: 3,
    placement: 'topRight',
  });
};


export const Notification = (props) => {

  const openNotification = ({ message, title}) => {
    notification.success({
      message: 'ADD ITEM',
      description: `${title} ${message}`,
      duration: 3,
      placement: 'topRight',
    });
  };

  return (
      <>
          {props.children({ notifiy: openNotification })}
      </>
  );
};
