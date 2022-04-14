import React, { useState } from 'react';
import '../styles/tooltip.css';


export default function TooltipFixed(props: any) {
  let positions: Array<string> = ['top', 'right', 'bottom', 'left'];
  let delayShow: any;

  const position: string = positions.includes(props.position) ? props.position : 'bottom';
  
  
  const [isVisible, setVisibility] = useState(false);

  const showTooltip = (e: any) => {
   
      delayShow = setTimeout(() => {
        setVisibility(true);
      }, props.delayShow || 200);

    
  };

  const hideTooltip = () => {
    setTimeout(() => {
      clearTimeout(delayShow)
      setVisibility(false);
    }, props.delayHide || 100);
  };

  return (
    <div className="container">
      <div className="wrapper" onMouseEnter={showTooltip} onMouseLeave={hideTooltip} >
        {props.children}
        {isVisible ?
          <div className={`custom-tooltip ${position}`}>
            {props.content}
          </div>
          : null
        }
      </div>



    </div>
  );
}