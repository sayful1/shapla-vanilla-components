import createConfirmModal, {modalConfirmDefaults} from "../modal/modal-confirm.ts";
import {ModalConfirmPropsInterface} from "../modal/interfaces.ts";

class Dialog {
  /**
   * Get parameters
   *
   * @param {String|Object} message
   * @param {Object} params
   * @return {Object}
   */
  private static getParams(
    message: string | ModalConfirmPropsInterface,
    params: ModalConfirmPropsInterface | Record<string, string> = {}
  ): ModalConfirmPropsInterface {
    if (typeof message === "string") {
      params.message = message;
    } else {
      params = message;
    }

    return Object.assign({}, modalConfirmDefaults(), params);
  }

  /**
   * Show confirm dialog
   *
   * @param {String|Object} message
   * @param {Object} params
   * @returns {Promise}
   */
  static confirm(
    message: string | ModalConfirmPropsInterface,
    params: ModalConfirmPropsInterface | Record<string, string> = {}
  ): Promise<boolean> {
    const _params: ModalConfirmPropsInterface = this.getParams(message, params);
    _params.type = "confirm";

    return new Promise((resolve) => {
      const modal = createConfirmModal(_params);
      modal.addEventListener('confirm', () => {
        resolve(true)
      })
    });
  }

  /**
   * Show alert dialog
   *
   * @param message
   * @param params
   */
  static alert(
    message: string | ModalConfirmPropsInterface,
    params: ModalConfirmPropsInterface | Record<string, string> = {}
  ): void {
    const _params: ModalConfirmPropsInterface = this.getParams(message, params);
    _params.type = "confirm";
    _params.cancelButton = false;
    createConfirmModal(_params);
  }
}

export default Dialog;
