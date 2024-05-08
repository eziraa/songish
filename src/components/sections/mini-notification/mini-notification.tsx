/** @jsxImportSource @emotion/react */
import { CgClose } from "react-icons/cg";
import { useAppDispatch, useAppSelector } from "../../../utils/customHook";
import {
  NotificationContent,
  NotificationHeader,
  notificationStyle,
} from "./components.style";
import { RiCheckDoubleLine } from "react-icons/ri";
import { hideNotification } from "../../../store/notification/notificationSlice";

const Notification = () => {
  const notification = useAppSelector((state) => state.notifications);
  const dispatch = useAppDispatch();
  return (
    notification.status && (
      <div
        css={notificationStyle()}
        style={{
          backgroundColor:
            notification.color === "green" ? "#0ab976" : "#e05d5d",
        }}
      >
        <NotificationHeader>
          <h4>{notification.title}</h4>
          <CgClose
            style={{ fontSize: "24px", cursor: "pointer" }}
            onClick={() => dispatch(hideNotification())}
          />
        </NotificationHeader>
        <NotificationContent>
          <RiCheckDoubleLine size={44} color="white" />
          <p style={{ fontSize: "20px" }}>{notification.desc}</p>
        </NotificationContent>
      </div>
    )
  );
  return;
};
export default Notification;
