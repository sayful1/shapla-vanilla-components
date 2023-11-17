import './style.scss'
import {Dialog, ShaplaModal, Spinner} from "../src/index.ts";
import {Notify} from "../src";

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
      <button id="show-spinner" type="button">Show Spinner</button>
      <button id="show-single-spinner" type="button">Show Spinner (Single)</button>
      <button id="show-text-spinner" type="button">Show Text Spinner</button>
  </div>
  <div class="my-4">
      <button id="show-notification" type="button">Show Notification</button>
      <button id="show-notification-error" type="button">Show Error Notification</button>
  </div>
  <div class="my-4">
      <button id="show-modal" type="button">Show Box Modal</button>
      <button id="show-card-modal" type="button">Show Card Modal</button>
  </div>
  <div class="my-4">
      <button id="show-confirm-modal" type="button">Show Confirm Modal</button>
      <button id="show-alert-modal" type="button">Show Alert Modal</button>
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

const button6 = document.querySelector<HTMLButtonElement>('#show-modal');
if (button6) {
  button6.addEventListener('click', () => {
    const modal = ShaplaModal.box('Add some html element.', {type: "box"});
  })
}

const button7 = document.querySelector<HTMLButtonElement>('#show-card-modal');
if (button7) {
  button7.addEventListener('click', () => {
    const modal = ShaplaModal.card({
      type: "card",
      body: 'Add some html element.',
      header: 'Add new post'
    });
  })
}

const button8 = document.querySelector<HTMLButtonElement>('#show-confirm-modal');
if (button8) {
  button8.addEventListener('click', () => {
    Dialog.confirm('Are you sure?').then(() => {
      window.console.log('confirmed.');
    });
  })
}

const button9 = document.querySelector<HTMLButtonElement>('#show-alert-modal');
if (button9) {
  button9.addEventListener('click', () => {
    Dialog.alert({title: 'Are you sure?', message: 'you cannot undo it again.'});
  })
}