/** @jsxImportSource @emotion/react */
import { useAppSelector } from "../../utils/customHook";
import { notificationStyle } from "./components.style";

const Notification = () => {
  const notification = useAppSelector((state) => state.notifications); // assuming the slice is named 'notification'
  return (
    notification.status && (
      <div css={notificationStyle(notification.color)}>
        <h4>{notification.title}</h4>
        <p>{notification.desc}</p>
      </div>
    )
  );
};
export default Notification;
