import './styles/tooltip.css';
import {TooltipInput, TooltipHover, TooltipFixed} from './components/index';

export default function Tooltip(props: any) {
  let types: Array<String> = ['mouse', 'fixed'];
  let selectedType: string = types.includes(props.type) ? props.type : 'fixed';

  switch(props.children.type) {
    case 'input':
      return( <TooltipInput position={props.position} content={props.content}>{props.children}</TooltipInput>)
  }
  switch(selectedType) {
    case 'mouse':
      return (<TooltipHover content={props.content}>{props.children}</TooltipHover>);

    case 'fixed':
     return( <TooltipFixed position={props.position} content={props.content}>{props.children}</TooltipFixed>)
  }
  

    
 
 
}