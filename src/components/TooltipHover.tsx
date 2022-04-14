import { useState } from 'react';
import '../styles/tooltip.css';

export default function TooltipHover(props: any) {
    let delayShow: any;

    const [top, setTop] = useState(0)
    const [left, setLeft] = useState(0)

    const [isVisible, setVisibility] = useState(false);


    const showTooltip = (e: any) => {
        var x = e.clientX +20,
            y = e.clientY +20;
        setTop(y)
        setLeft(x)
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
            <div className="wrapper" onMouseMove={showTooltip} onMouseOut={hideTooltip} >
                {props.children}
            </div>

            {isVisible ?
                    <div className={`custom-tooltip-hover`} style={{ 'top': top, 'left': left }}>
                        {props.content}
                    </div>
                    : null
                }

        </div>
    );
}