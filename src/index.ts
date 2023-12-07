import {createEl, createUUID} from './components/utils.ts';
import Spinner from './components/spinner/spinner.ts';
import Notify from './components/notification/notification.ts';
import Modal, {
  closeModal,
  createBoxModal,
  createCardModal,
  createConfirmModal,
  refreshModalBodyClass
} from './components/modal/modal.ts';
import crossIcon from './components/cross-icon/cross-icon.ts';
import Dialog from './components/confirm/Dialog.ts';

export {
  createEl,
  createUUID,
  crossIcon,
  Spinner,
  Notify,
  Dialog,
  Modal,
  refreshModalBodyClass,
  closeModal,
  createBoxModal,
  createCardModal,
  createConfirmModal
}