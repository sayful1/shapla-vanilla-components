import {createEl} from "../utils.ts";

type TYPE_CROSS_SIZE = "normal" | "small" | "medium" | "large";

interface CrossIconPropsInterface {
  ariaLabel?: string;
  size?: TYPE_CROSS_SIZE,
  fixed?: boolean;
  attributes?: Record<string, string>
}

const crossIconDefaults = (): CrossIconPropsInterface => {
  return {
    ariaLabel: 'close',
    size: 'normal',
    fixed: false,
    attributes: {}
  }
}

const crossIcon = (args: CrossIconPropsInterface = {}): HTMLSpanElement => {
  let props = Object.assign({}, crossIconDefaults(), args);
  const classes: string[] = ["shapla-delete-icon", `is-${props.size}`];
  if (props.fixed) classes.push("is-fixed");

  return createEl('span', {
    'class': classes.join(' '),
    'aria-label': props.ariaLabel ?? 'close',
    ...props.attributes
  });
}

export default crossIcon;