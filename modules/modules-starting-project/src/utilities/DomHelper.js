/* eslint-disable func-style */
export class DOMHelper {
  static clearEventListeners(element) {
    const clonedElement = element.cloneNode(true);
    element.replaceWith(clonedElement);

    return clonedElement;
  }

  static moveElement(elementId, newDestinationSelector) {
    const element = document.getElementById(elementId);
    const destinationElement = document.querySelector(newDestinationSelector);
    destinationElement.append(element);
    element.scrollIntoView({ behavior: "smooth" });
  }
}

// eslint-disable-next-line func-style
// eslint-disable-next-line require-jsdoc
// eslint-disable-next-line func-style
// eslint-disable-next-line require-jsdoc
// eslint-disable-next-line func-style
// eslint-disable-next-line require-jsdoc
export function clearEventListeners(element) {
  const clonedElement = element.cloneNode(true);
  element.replaceWith(clonedElement);

  return clonedElement;
}

// eslint-disable-next-line require-jsdoc
export function moveElement(elementId, newDestinationSelector) {
  const element = document.getElementById(elementId);
  const destinationElement = document.querySelector(newDestinationSelector);
  destinationElement.append(element);
  element.scrollIntoView({ behavior: "smooth" });
}
