/* eslint-disable no-magic-numbers */
/* eslint-disable max-statements */
/* eslint-disable no-inline-comments */
import Component from "./Component";

export class Tooltip extends Component {
  constructor(closeNotifierFunction, text, hostElementId) {
    super(hostElementId);
    this.closeNotifier = closeNotifierFunction;
    this.text = text;
    this.create();

    this.closeTooltip = () => {
      this.detach();
      this.closeNotifier();
    };
  }

  create() {
    const tooltipElement = document.createElement("div");
    tooltipElement.className = "card";
    const tooltipTemplate = document.getElementById("tooltip");
    const tooltipBody = document.importNode(tooltipTemplate.content, true);
    tooltipBody.querySelector("p").textContent = this.text;
    tooltipElement.append(tooltipBody);

    const hostElPosLeft = this.hostElement.offsetLeft;
    const hostElPosTop = this.hostElement.offsetTop;
    const hostElHeight = this.hostElement.clientHeight;
    const parentElementScrolling = this.hostElement.parentElement.scrollTop;

    // eslint-disable-next-line no-magic-numbers
    // eslint-disable-next-line id-length
    const x = hostElPosLeft + 20;
    // eslint-disable-next-line no-magic-numbers
    // eslint-disable-next-line id-length
    const y = hostElPosTop + hostElHeight - parentElementScrolling - 10;
    tooltipElement.style.position = "absolute";
    // eslint-disable-next-line line-comment-position
    tooltipElement.style.left = `${x}px`; // 500px
    tooltipElement.style.top = `${y}px`;

    tooltipElement.addEventListener("click", this.closeTooltip);
    this.element = tooltipElement;
  }
}
