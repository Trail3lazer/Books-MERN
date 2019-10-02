import React, {useState} from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Saved from './pages/SavedPage';
import Search from './pages/SearchPage';
import './App.css';

function App() {
  const [saved] = useState([]);
  return (
    <Router className="App">

      <Switch>
        <Route href="/">
          <Search saved={saved} />
        </Route>
        <Route exact href="/favorites">
          <Saved saved={saved} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
