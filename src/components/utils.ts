/**
 * Create dynamic element
 *
 * @param {string} tagName
 * @param {object} attributes
 * @param {array} children
 * @returns {HTMLElement}
 */
const createEl = (
  tagName: string,
  attributes: Record<string, string> = {},
  children: (string | HTMLElement)[] = []
): HTMLElement => {
  let el = document.createElement(tagName);
  if (Object.keys(attributes).length) {
    Object.entries(attributes).forEach(([key, value]) => {
      el.setAttribute(key, value);
    })
  }
  if (children.length) {
    el.append(...children);
  }
  return el;
}

export {
  createEl,
}