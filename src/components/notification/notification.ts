import Notify from "./Notify";
import notificationContainer from "./notification-container";
import notificationItem from "./notification-item";
import {NotificationItemPropsInterface} from "./interfaces";

const container = notificationContainer();
Notify.on((option: NotificationItemPropsInterface) => {
  container.prepend(notificationItem(option));
});

export default Notify;