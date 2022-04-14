import './App.css';
import Tooltip from './Tooltip';

function App() {


  return (
    <div className="App">
      <header className="App-header">
        <h2>Custom Tooltip Component</h2>
      </header>

      <div className="wrapper">
        <Tooltip content={<pre>Balise html pre</pre>}>
          <button>tooltip balise</button>
        </Tooltip> </div>


      <div className="wrapper">
        <Tooltip content="Sed ut perspiciatis unde omnis iste natus error sit voluptatem" position="bottom">
          <input type="text"></input>
        </Tooltip>
      </div>

      <div className="wrapper">
        <Tooltip content="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium " type="mouse">
          <button>Follow mouse</button>
        </Tooltip> </div>


      <div className="wrapper">
        <Tooltip content="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium" position="bottom">
          <button>Bottom tooltip</button>
        </Tooltip></div>
    </div>

  );
}

export default App;
