import {ModalPropsInterface} from "./interfaces.ts";
import {createEl} from "../utils.ts";
import {contentClasses, modalDefaults, modalRootEl} from "./modal-core.ts";

const boxEl = (content: string | HTMLElement = '', props: ModalPropsInterface): HTMLElement => {
  return createEl('div', {class: contentClasses(props)}, [content]);
}

const createBoxModal = (content: string | HTMLElement = '', args: ModalPropsInterface = {}) => {
  const props = Object.assign({}, modalDefaults(), args);
  const modal = modalRootEl(props, boxEl(content, props));

  document.body.append(modal);

  return modal;
}

export {boxEl}
export default createBoxModal;