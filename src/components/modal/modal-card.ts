import {ModalCardInterface, ModalPropsInterface} from "./interfaces.ts";
import {contentClasses, modalCloseEl, modalRootEl} from "./modal-core.ts";
import {createEl} from "../utils.ts";

const modalCardDefaults = (): ModalPropsInterface => {
  return {
    title: 'Untitled',
    type: 'card',
    closeOnBackgroundClick: true,
    showCloseIcon: true,
    showCardFooter: false,
    contentClass: '',
    backgroundTheme: 'dark',
    contentSize: 'medium',
  }
}

const cardEl = (args: ModalCardInterface = {}): HTMLElement => {
  const closeEl = modalCloseEl('medium', false)
  const header = createEl('div', {class: 'shapla-modal-card__header'}, [
    createEl('p', {class: 'shapla-modal-card__title'}, [args.header ?? 'Untitled']),
    args.showCloseIcon ? closeEl : ''
  ]);
  const body = createEl('div', {class: 'shapla-modal-card__body'}, [args.body ?? '']);
  const footer = createEl('div', {class: 'shapla-modal-card__footer is-pulled-right'})

  return createEl('div', {class: contentClasses(args)}, [
    header,
    body,
    args.showCardFooter ? footer : ''
  ]);
}

const createCardModal = (args: ModalCardInterface) => {
  const props = Object.assign({}, modalCardDefaults(), args);
  const modal = modalRootEl(props, cardEl(props));

  document.body.append(modal);

  return modal;
}

export {cardEl}
export default createCardModal;