import './style.scss'
import {Spinner} from "../src/index.ts";
import {Notify} from "../src";

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
      <button id="show-spinner" type="button">Show Spinner</button>
      <button id="show-single-spinner" type="button">Show Spinner (Single)</button>
      <button id="show-text-spinner" type="button">Show Text Spinner</button>
  </div>
  <div>
      <button id="show-notification" type="button">Show Notification</button>
      <button id="show-notification-error" type="button">Show Error Notification</button>
      <button id="show-notification-warning" type="button">Show Warning Notification</button>
  </div>
`

const button = document.querySelector<HTMLButtonElement>('#show-spinner');
if (button) {
  button.addEventListener('click', () => {
    Spinner.show();
    setTimeout(() => {
      Spinner.hide();
    }, 10000)
  })
}

const button2 = document.querySelector<HTMLButtonElement>('#show-text-spinner');
if (button2) {
  button2.addEventListener('click', () => {
    Spinner.show({showText: true});
    setTimeout(() => {
      Spinner.hide();
    }, 10000)
  })
}

const button3 = document.querySelector<HTMLButtonElement>('#show-single-spinner');
if (button3) {
  button3.addEventListener('click', () => {
    Spinner.show({single: true});
    setTimeout(() => {
      Spinner.hide();
    }, 10000)
  })
}

const button4 = document.querySelector<HTMLButtonElement>('#show-notification');
if (button4) {
  button4.addEventListener('click', () => {
    Notify.success('Success notification', 'Success!');
  })
}

const button5 = document.querySelector<HTMLButtonElement>('#show-notification-error');
if (button5) {
  button5.addEventListener('click', () => {
    Notify.error('Error notification', 'Error!');
  })
}