import './styles/App.css';
import Home from './components/Home';
import Categories from './components/Categories';
import Entries from './components/Entries';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

const App = () => {

  return (
    <div className="App">
      <h2>Chronicle</h2>

      <Router>
        <Navbar />

        <Switch>
          <Route path="/Categories" component={Categories} />
          <Route path="/entires" component={Entries} />
          <Route path="/">
            <Home />
          </Route>
        </Switch>

      </Router>
    </div>
  );
};

export default App;