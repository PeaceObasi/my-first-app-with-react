/**import HelloWorld from './components/HelloWorld';
import HelloWorld2 from './components/HelloWorld2';
import HelloWorld3 from './components/HelloWorld3';
import HelloWorld4 from './components/HelloWorld4';
import HelloWorld5 from './components/HelloWorld5';
import HelloWorld6 from './components/HelloWorld6/HelloWorld6';

import './App.css';

const App: React.FC = () => {
  return (
    <div>
      <HelloWorld />
      <HelloWorld2 name="Peace" />
      <HelloWorld3 name="Obasi" />
      <HelloWorld4 />
      <HelloWorld5 />
      <HelloWorld6 />
    </div>
  );
}
//Ask Dr. Pius why for the app.tsx adding helloworld2 component without a declaration gives an error, saying
//there should be a 'name' declaration

//Just in case a name is not inputted by the client, this is a default code to input the name 'User"
HelloWorld2.defaultProps = {
  name: "User"
}*/

import React from 'react';
import './App.css';
import HelloWorld from './components/HelloWorld';
import HelloWorld6 from './components/HelloWorld6/HelloWorld6';
import HelloWorld7 from './components/HelloWorld7/HelloWorld7';
import HelloWorld10 from './components/HelloWorld10/HelloWorld10';

const App: React.FC = () => {
  return (
    <div className="Container"> 
      <div className="Column3">
        <HelloWorld10 />
      </div>
    </div>
  );
}

//Just in case a name is not inputted by the client, this is a default code to input the name 'User"
HelloWorld10.defaultProps = {
  name: "User"
}
export default App;













//import logo from './logo.svg';
//import './App.css';


/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}**/

//export default App;
