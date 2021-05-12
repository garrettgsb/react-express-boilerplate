import axios from 'axios';
import { useState, useEffect, useRef } from 'react';
import './styles/App.css';
import Home from './components/Home';
import Categories from './components/Categories';
import Entries from './components/Entries';
import Navbar from './components/menu/Navbar';
import Graphs from './components/Graphs';
import Settings from './components/Settings';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { UserContext } from './hooks/UserContext';

const App = () => {
  const [user, setUser] = useState<any>(null);
  const userRef = useRef();
  userRef.current = user;
  // Hardcoded userId for production
  console.log('App has rerendered')
  useEffect(() => {
    axios.get('/api/users/1')
    .then((res) => {
      setUser(res.data[0])
        console.log(userRef.current)
    })
  }, [])
  return (
    <div className="App">
      <h2>Chronicle</h2>
      <UserContext.Provider value={{ userRef }}>
        <Router>
          <Navbar />



          <Switch>
            <Route path="/categories" component={Categories} />
            <Route path="/entries" component={Entries} />
            <Route path="/settings" component={Settings} />
            <Route path="/graphs" component={Graphs} >
            <Route path="/home" component={Home} />
            <Redirect to='/' />
            </Route>
          </Switch>
        </Router >
      </UserContext.Provider>
    </div>
  );
};

export default App;