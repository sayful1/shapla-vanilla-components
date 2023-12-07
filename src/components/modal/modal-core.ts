import {ModalPropsInterface} from "./interfaces.ts";
import {crossIcon} from "../../index.ts";
import {createEl} from "../utils.ts";

declare global {
  interface ElementEventMap {
    "close.ShaplaModal": CustomEvent<{ via: string }>
  }
}

let isModalEventLoaded = false;

const refreshModalBodyClass = (active: boolean = false) => {
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

/**
 * Register keyboard and click event to auto close modal
 * Make sure to run this event only once
 */
const closeModalOnClickAndKeyboardEvent = () => {
  if (!isModalEventLoaded) {
    window.console.log('Modal: MouseEvent and KeyboardEvent are registered.')
    isModalEventLoaded = true
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
  }
}

const closeModal = (modal: Element | null, detail = {}) => {
  if (modal && modal.classList.contains('is-active')) {
    modal.classList.remove('is-active');
    modal.dispatchEvent(new CustomEvent('close.ShaplaModal', {detail: detail}));
    modal.remove();
    refreshModalBodyClass(false);
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

  const rootEl = createEl(
    'div',
    {id: modalId, class: 'shapla-modal is-active'},
    [
      bgEl,
      props.showCloseIcon && props.type !== 'card' ? closeEl : '',
      child
    ]
  );
  closeModalOnClickAndKeyboardEvent();
  window.console.log('modal root element created.')
  return rootEl;
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
  refreshModalBodyClass,
  closeModal,
  contentClasses,
  modalCloseEl,
  modalBackgroundEl,
  modalRootEl,
  modalDefaults
}