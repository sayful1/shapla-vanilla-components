import {createEl} from "../utils";

interface SpinnerPropsInterface {
  id?: string;
  single?: boolean;
  showText?: boolean;
  loadingText?: string;
  size?: 'default' | 'small' | 'medium' | 'large';
  position?: 'fixed' | 'absolute' | 'static';
  attributes?: Record<string, string>
}

const spinnerDefaultProps = (): SpinnerPropsInterface => {
  return {
    id: 'shapla-spinner-container',
    single: false,
    showText: false,
    loadingText: 'Loading...',
    size: 'default',
    position: 'fixed',
    attributes: {}
  }
}

const createSpinnerLayer = (index: number) => {
  return createEl('div', {class: `shapla-spinner__layer shapla-spinner__layer-${index}`}, [
    createEl('div', {class: 'shapla-spinner__circle-clipper shapla-spinner__left'}, [
      createEl('div', {class: 'shapla-spinner__circle'})
    ]),
    createEl('div', {class: 'shapla-spinner__gap-patch'}, [
      createEl('div', {class: 'shapla-spinner__circle'})
    ]),
    createEl('div', {class: 'shapla-spinner__circle-clipper shapla-spinner__right'}, [
      createEl('div', {class: 'shapla-spinner__circle'})
    ]),
  ])
}

const createSpinner = (args: SpinnerPropsInterface = {}) => {
  const props = Object.assign({}, spinnerDefaultProps(), args);

  let spinnerClass: string[] = ['shapla-spinner'];
  spinnerClass.push(`is-${props.size}`);
  if (props.single) {
    spinnerClass.push('shapla-spinner--single-color');
  }
  let spinnerInnerClass: string[] = ['shapla-spinner-inner'];
  if (props.showText) {
    spinnerInnerClass.push('has-text');
  }

  let loadingTextEl: string | HTMLElement = '';
  if (props.showText) {
    loadingTextEl = createEl('div', {class: 'shapla-spinner-text'}, [
      props.loadingText as string
    ]);
  }

  const spinner = createEl('div',
    {
      id: props.id ? props.id.replace('#', '') : 'shapla-spinner-container',
      class: `shapla-spinner-container is-${props.position}`,
      ...props.attributes
    },
    [
      createEl('div', {class: spinnerInnerClass.join(' ')}, [
        createEl('div', {class: spinnerClass.join(' ')}, [
          createSpinnerLayer(1),
          createSpinnerLayer(2),
          createSpinnerLayer(3),
          createSpinnerLayer(4),
        ]),
        loadingTextEl
      ])
    ]
  );

  document.body.append(spinner);
}

const showSpinner = (args: SpinnerPropsInterface = {}) => {
  createSpinner(args);
}

const hideSpinner = (id: string = '') => {
  const spinner = document.querySelector(id ? `#${id}` : '#shapla-spinner-container');
  if (spinner) {
    spinner.remove();
  }
}

class Spinner {
  static show(args: SpinnerPropsInterface = {}) {
    showSpinner(args);
  }

  static hide(id: string = '') {
    hideSpinner(id);
  }
}

export {showSpinner, hideSpinner}
export default Spinner;