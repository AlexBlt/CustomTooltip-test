import React, { useState } from 'react';
import './tooltip.css';


export default function Tooltip(props: any) {
  let positions: Array<string> = ['top', 'right', 'bottom', 'left'];

  let delayShow, delayHide: any;
  let position: string = positions.includes(props.position) ? props.position : 'right';

  const [isVisible, setVisibility] = useState(false);

  const showTooltip = () => {
    delayShow = setTimeout(() => {
      setVisibility(true);
    }, props.delayShow || 300);
  };

  const hideTooltip = () => {
    delayHide = setTimeout(() => {
      setVisibility(false);
    }, props.delayHide || 100);
  };

  return (
    <div className="container">
      <div className="wrapper" onMouseEnter={showTooltip} onMouseLeave={hideTooltip} >
        {props.children}
      </div>

      {isVisible ?
        <div className={`custom-tooltip ${position}`}>
          {props.content}
        </div>
        : null
      }

    </div>
  );
}