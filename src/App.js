import './App.css';
import { globalFontSizes } from './styles';
import Tooltip from './Tooltip.tsx';

function App() {


  return (
    <div className="App">
      <header className="App-header">

      </header>

      <div className="wrapper">
        <Tooltip content="test" position="top">
          <button>tooltip</button>
        </Tooltip> </div>


      <div className="wrapper">
        <Tooltip content="test">
          <button>tooltip</button>
        </Tooltip>
      </div>

      <div className="wrapper">
        <Tooltip content="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab " position="left">
          <button>Bottom tooltip</button>
        </Tooltip> </div>


      <div className="wrapper">
        <Tooltip content="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab " position="bottom">
          <button>Bottom tooltip</button>
        </Tooltip></div>
      </div> 
  
  );
}

export default App;
