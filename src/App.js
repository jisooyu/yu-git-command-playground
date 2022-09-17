import logo from "./logo.svg";
import "./App.css";
import SessionTest from "./components/SessionTest";
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
          Learn Session 2
        </a>
        <SessionTest />
      </header>
    </div>
  );
}

export default App;
