import {ModalCardInterface, ModalConfirmPropsInterface} from './interfaces.ts';
import createCardModal from './modal-card.ts'
import createConfirmModal from './modal-confirm.ts'
import createBoxModal from './modal-box.ts'
import {closeModal, refreshBodyClass} from "./modal-core.ts";


/**
 * Allow to close modal by clicking any child element with attribute 'data-close'
 */
document.addEventListener('click', (event: MouseEvent) => {
  const element = event.target as HTMLElement;
  if ('shapla-modal' === element.getAttribute('data-close')) {
    event.preventDefault();
    const closestModal = element.closest('.shapla-modal.is-active') as HTMLElement;
    let via = element.hasAttribute('data-close-element') ?
      element.getAttribute('data-close-element') :
      'data-close-attribute';
    closeModal(closestModal, {via: via ?? 'data-close-attribute'})
  }
});

/**
 * Close last modal when press 'Escape' key
 */
document.addEventListener('keydown', (event: KeyboardEvent) => {
  if (['Escape', 'Esc'].includes(event.key)) {
    const modals = document.body.querySelectorAll('.shapla-modal.is-active');
    if (modals.length) {
      closeModal(modals[modals.length - 1], {via: 'escape-key-press'})
    }
  }
})

class Modal {
  static refreshBodyClass(active: boolean = false) {
    refreshBodyClass(active)
  }

  static close(modal: Element | null, detail = {}) {
    closeModal(modal, detail);
  }

  static box(content: string = '', args: ModalCardInterface): HTMLElement {
    return createBoxModal(content, args);
  }

  static card(args: ModalCardInterface): HTMLElement {
    return createCardModal(args);
  }

  static confirm(args: ModalConfirmPropsInterface): HTMLElement {
    return createConfirmModal(args);
  }
}

export {
  refreshBodyClass,
  closeModal,
  createBoxModal,
  createCardModal,
  createConfirmModal
}
export default Modal;