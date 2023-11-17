import {ModalConfirmPropsInterface} from "./interfaces.ts";
import {createEl} from "../utils.ts";
import {closeModal, contentClasses, modalDefaults, modalRootEl} from "./modal-core.ts";

const modalConfirmDefaults = (): ModalConfirmPropsInterface => {
  return {
    message: 'Are you sure?',
    title: '',
    type: 'confirm',
    icon: 'primary',
    confirmButton: 'Ok',
    cancelButton: 'Cancel',
    backgroundTheme: 'light',
    contentSize: 'small',
  }
}

const confirmEl = (props: ModalConfirmPropsInterface) => {
  const iconEl = createEl('div', {class: `shapla-modal-confirm__icon is-${props.icon}`}, [
    createEl('div', {class: 'shapla-modal-confirm__icon-content'}, ['!'])
  ]);
  const title = createEl('div', {class: 'shapla-modal-confirm__title'}, [props.title ?? ''])
  const content = createEl('div', {class: 'shapla-modal-confirm__content'}, [
    iconEl,
    props.title ? title : '',
    createEl('div', {class: 'shapla-modal-confirm__message'}, [props.message])
  ]);

  const cancelBtn = createEl('button',
    {
      class: 'shapla-button button--cancel',
      'data-close': 'shapla-modal',
      'data-close-attribute': 'cancel-button',
    },
    [typeof props.cancelButton === 'string' ? props.cancelButton : '']
  )
  const confirmBtn = createEl('button',
    {
      class: 'shapla-button is-primary button--confirm'
    },
    [typeof props.confirmButton === 'string' ? props.confirmButton : '']
  )
  const actions = createEl('div', {class: 'shapla-modal-confirm__actions'}, [
    props.cancelButton ? cancelBtn : '',
    props.confirmButton ? confirmBtn : '',
  ])
  return createEl('div', {class: contentClasses(props)}, [content, actions]);
}


const createConfirmModal = (args: ModalConfirmPropsInterface) => {
  const props = Object.assign({}, modalDefaults(), modalConfirmDefaults(), args, {
    showCloseIcon: false,
    closeOnBackgroundClick: false,
  });
  const modal = modalRootEl(props, confirmEl(props));

  document.body.append(modal);

  const confirmBtn = modal.querySelector('.button--confirm');
  if (confirmBtn) {
    confirmBtn.addEventListener('click', (event) => {
      event.preventDefault();
      modal.dispatchEvent(new CustomEvent('confirm', {detail: true}));
      closeModal(modal);
    })
  }

  return modal;
}

export {confirmEl, modalConfirmDefaults}
export default createConfirmModal;
