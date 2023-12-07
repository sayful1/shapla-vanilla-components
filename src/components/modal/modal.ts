import {ModalCardInterface, ModalConfirmPropsInterface} from './interfaces.ts';
import createCardModal from './modal-card.ts'
import createConfirmModal from './modal-confirm.ts'
import createBoxModal from './modal-box.ts'
import {closeModal, refreshModalBodyClass} from "./modal-core.ts";

class Modal {
  static refreshBodyClass(active: boolean = false) {
    refreshModalBodyClass(active)
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
  refreshModalBodyClass,
  closeModal,
  createBoxModal,
  createCardModal,
  createConfirmModal
}
export default Modal;