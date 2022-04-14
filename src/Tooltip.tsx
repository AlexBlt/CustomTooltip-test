import React, { useState } from 'react';
import './tooltip.css';
import TooltipFixed from './TooltipFixed';
import TooltipHover from './TooltipHover';


export default function Tooltip(props: any) {
  let types: Array<String> = ['mouse', 'fixed'];

  let tooltipType: any;
  let selectedType: string = types.includes(props.type) ? props.type : 'fixed';
  console.log(props)
  switch(selectedType) {
    case 'mouse':
      return (<TooltipHover content={props.content}>{props.children}</TooltipHover>);
      break;

    case 'fixed':
     return( <TooltipFixed position={props.position} content={props.content}>{props.children}</TooltipFixed>)
     break;
  }
  

    
 
 
}