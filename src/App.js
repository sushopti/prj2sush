import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Editfirst <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <form>
      <label>Username ( Farmer / Admin / User ) :
        <input type="text" />
             </label>
             <br></br>
             <label>Password:
        <input type="Password" />
             </label>
             <button type="button">Sign In</button>
    </form>
    </div>
  );
}

export default App;
