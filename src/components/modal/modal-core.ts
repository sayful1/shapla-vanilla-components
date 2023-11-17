import {ModalPropsInterface} from "./interfaces.ts";
import {crossIcon} from "../../index.ts";
import {createEl} from "../utils.ts";

declare global {
  interface ElementEventMap {
    "close.ShaplaModal": CustomEvent<{ via: string }>
  }
}

const refreshBodyClass = (active: boolean = false) => {
  const body = document.querySelector("body") as HTMLBodyElement;
  if (active) {
    return body.classList.add("has-shapla-modal");
  }
  setTimeout(() => {
    if (body.querySelectorAll(".shapla-modal.is-active").length === 0) {
      body.classList.remove("has-shapla-modal");
    }
  }, 50);
};

const closeModal = (modal: Element | null, detail = {}) => {
  if (modal && modal.classList.contains('is-active')) {
    modal.classList.remove('is-active');
    modal.dispatchEvent(new CustomEvent('close.ShaplaModal', {detail: detail}));
    modal.remove();
    refreshBodyClass(false);
  }
}

const contentClasses = (props: ModalPropsInterface): string => {
  const classes: string[] = ["shapla-modal-content", `is-${props.contentSize}`, `shapla-modal-${props.type}`];
  if (!props.showCardFooter && props.type === "card") {
    classes.push("has-no-footer");
  }
  if (props.contentClass) {
    classes.push(props.contentClass);
  }
  return classes.join(' ');
};

const modalCloseEl = (size: 'medium' | 'large', fixed: boolean = false) => {
  return crossIcon({
    size: size,
    fixed: fixed,
    attributes: {
      'data-close': 'shapla-modal',
      'data-close-element': 'close-button',
    }
  });
}

const modalBackgroundEl = (props: ModalPropsInterface) => {
  const attributes: Record<string, string> = {'class': `shapla-modal-background is-${props.backgroundTheme}`};
  if (props.closeOnBackgroundClick) {
    attributes['data-close'] = 'shapla-modal';
    attributes['data-close-element'] = 'background';
  }

  return createEl('div', attributes);
}

const modalRootEl = (props: ModalPropsInterface, child: HTMLElement | string) => {
  const modalId = props.id ? props.id.replace('#', '') : 'shapla-modal';
  const bgEl = modalBackgroundEl(props);
  const closeEl = modalCloseEl('large', true);
  return createEl(
    'div',
    {id: modalId, class: 'shapla-modal is-active'},
    [
      bgEl,
      props.showCloseIcon && props.type !== 'card' ? closeEl : '',
      child
    ]
  );
}

const modalDefaults = (): ModalPropsInterface => {
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

export {
  refreshBodyClass,
  closeModal,
  contentClasses,
  modalCloseEl,
  modalBackgroundEl,
  modalRootEl,
  modalDefaults
}