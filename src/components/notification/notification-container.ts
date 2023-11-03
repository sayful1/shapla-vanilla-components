import {createEl} from "../utils";
import {NotificationContainerPropsInterface} from "./interfaces";

const createNotificationContainer = (props: NotificationContainerPropsInterface = {}) => {
  const defaults = {showDismisses: true, timeout: 4000, position: 'top-right'};
  const args = Object.assign(defaults, props)
  const position = args.position.split("-");
  const classes = [
    "shapla-notification-container",
    "shapla-notification--" + args.position,
    "is-position-" + position[0],
    "is-align-" + position[1],
  ];
  const element = createEl('div', {
    id: 'shapla-notification-container',
    class: classes.join(' ')
  })

  document.body.append(element);

  return element;
}

const notificationContainer = (): HTMLElement => {
  let container = document.querySelector('#shapla-notification-container') as HTMLElement;
  if (container) {
    return container;
  }
  return createNotificationContainer();
}

export default notificationContainer;