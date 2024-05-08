import logo from './logo.svg';
import './App.css';

function App() {
  document.addEventListener('contextmenu', preventRightClickSave);
  // document.addEventListener('click', preventRightClickSave);

  function preventRightClickSave(event){
    event.preventDefault()
    console.log("No right clicking allowed here bud")
  }


  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <div>
        <h1>
          Hello World!
        </h1>
        <button onClick={preventRightClickSave}>
          Click me
        </button>
      </div>
    </div>
  );
}

export default App;
