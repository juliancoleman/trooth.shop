import { type HTMLAttributes } from "react";

export const ScrollInformant = (props: HTMLAttributes<HTMLOrSVGElement>) => (
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    width="28.5px"
    height="43.5px"
    viewBox="0 0 28.5 43.5"
    enableBackground="new 0 0 28.5 43.5"
    xmlSpace="preserve"
    {...props}
  >
    <path
      fill="none"
      stroke="rgb(var(--trooth-primary-200))"
      strokeWidth="3"
      d="M14.415,41.848L14.415,41.848C7.587,41.848,2,36.261,2,29.433V14.415 C2,7.587,7.587,2,14.415,2h0c6.828,0,12.415,5.587,12.415,12.415v15.019C26.829,36.261,21.243,41.848,14.415,41.848z"
    ></path>
    <line
      id="dropdown-point"
      x1="14.415"
      y1="12.408"
      x2="14.415"
      y2="12.408"
      stroke="rgb(var(--trooth-primary-200))"
      strokeWidth="5"
      strokeLinecap="round"
    >
      <animate
        id="animation1"
        attributeName="y2"
        dur="3s"
        values="12.408; 12.408; 12.408; 15.908; 19.408; 19.408; 23.408; 23.408; 23.408; 23.408; 23.408"
        repeatCount="indefinite"
        begin="0s"
        fill="freeze"
      ></animate>
      <animate
        id="animation2"
        attributeName="y1"
        dur="3s"
        values="12.408; 12.408; 12.408; 12.408; 12.408; 12.408; 23.408; 23.408; 23.408; 23.408; 23.408"
        repeatCount="indefinite"
        begin="0s"
        fill="freeze"
      ></animate>
      <animate
        id="animation3"
        attributeName="opacity"
        dur="3s"
        values="0; 1; 1; 1; 1; 1; 1; 1; 1; 0; 0;"
        repeatCount="indefinite"
        begin="0s"
        fill="freeze"
      ></animate>
    </line>
  </svg>
);
