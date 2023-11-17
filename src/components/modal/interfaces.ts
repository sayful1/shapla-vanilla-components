type TYPE_MODAL_BACKGROUND_THEME = "dark" | "light";
type TYPE_CONTENT_SIZE = "small" | "medium" | "large" | "full";
type TYPE_MODAL_TYPE = 'card' | 'box' | 'confirm';

interface ModalPropsInterface {
  id?: string;
  type?: string | TYPE_MODAL_TYPE;
  closeOnBackgroundClick?: boolean;
  showCloseIcon?: boolean;
  contentClass?: string;
  backgroundTheme?: TYPE_MODAL_BACKGROUND_THEME;
  contentSize?: TYPE_CONTENT_SIZE;
  title?: string;
  showCardFooter?: boolean;
}

interface ModalCardInterface extends ModalPropsInterface {
  header?: string | HTMLElement;
  body?: string | HTMLElement;
  footer?: string | HTMLElement;
  showFooter?: boolean;
}

interface ModalConfirmPropsInterface {
  message: string;
  title?: string;
  type?: "alert" | "confirm";
  icon?: string | "primary" | "success" | "error";
  confirmButton?: string | boolean;
  cancelButton?: string | boolean;
  backgroundTheme?: TYPE_MODAL_BACKGROUND_THEME;
  contentSize?: TYPE_CONTENT_SIZE;
}

export type {
  TYPE_MODAL_BACKGROUND_THEME,
  TYPE_CONTENT_SIZE,
  TYPE_MODAL_TYPE,
  ModalCardInterface,
  ModalConfirmPropsInterface,
  ModalPropsInterface
}