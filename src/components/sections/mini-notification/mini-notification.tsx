/** @jsxImportSource @emotion/react */
import { useAppSelector } from "../../../utils/customHook";
import { notificationStyle } from "./components.style";

const Notification = () => {
  const notification = useAppSelector((state) => state.notifications);
  return (
    notification.status && (
      <div css={notificationStyle(notification.color)}>
        <h4>{notification.title}</h4>
        <p>{notification.desc}</p>
      </div>
    )
  );
  return;
};
export default Notification;
