/** @jsxImportSource @emotion/react */
import { CgClose } from "react-icons/cg";
import { useAppDispatch, useAppSelector } from "../../../utils/customHook";
import {
  MiniNotification,
  NotificationContent,
  NotificationHeader,
} from "./components.style";
import { hideNotification } from "../../../store/notification/notificationSlice";
import { FaRegCheckCircle } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";

const Notification = () => {
  const notification = useAppSelector((state) => state.notifications);
  const dispatch = useAppDispatch();
  return (
    notification.status && (
      <MiniNotification
        style={{
          color: notification.color === "green" ? "#02FFC0" : "#FF361B",
        }}
      >
        <NotificationHeader>
          <h4>{notification.title}</h4>
          <CgClose
            style={{ fontSize: "16px", cursor: "pointer" }}
            onClick={() => dispatch(hideNotification())}
          />
        </NotificationHeader>
        <NotificationContent>
          {notification.color === "red" ? (
            <MdOutlineCancel size={24} color="#FF361B" />
          ) : (
            <FaRegCheckCircle size={24} color="#02FFC0" />
          )}
          <p style={{ fontSize: "1rem" }}>{notification.desc}</p>
        </NotificationContent>
      </MiniNotification>
    )
  );
  // return;
};
export default Notification;
