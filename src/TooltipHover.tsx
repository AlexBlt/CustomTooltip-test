import React, { useState } from 'react';
import './tooltip.css';


export default function TooltipHover(props: any) {
    let delayShow: any;

    const [top, setTop] = useState(0)
    const [left, setLeft] = useState(0)

    const [isVisible, setVisibility] = useState(false);

    const showTooltip = (e: any) => {
        var x = e.clientX,
            y = e.clientY;
        setTop(y + 20)
        setLeft(x + 20)
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
            <div className="wrapper" onMouseMove={showTooltip} onMouseLeave={hideTooltip} >
                {props.children}
                {isVisible ?
                    <div className={`custom-tooltip`} style={{ 'top': top, 'left': left }}>
                        {props.content}
                    </div>
                    : null
                }
            </div>



        </div>
    );
}