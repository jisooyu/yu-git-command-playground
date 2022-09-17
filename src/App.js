import logo from "./logo.svg";
import "./App.css";
import SessionTest1 from "./components/SessionTest1";
function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'>
          Learn Session 1
        </a>
        <SessionTest1 />
      </header>
    </div>
  );
}

export default App;
