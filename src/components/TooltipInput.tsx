import React, { useState } from 'react';
import '../styles/tooltip.css';

export default function TooltipInput(props: any) {
  let delayShow: any;

  
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
          <div className={`custom-tooltip`}>
            {props.content}
          </div>
          : null
        }
      </div>



    </div>
  );
}