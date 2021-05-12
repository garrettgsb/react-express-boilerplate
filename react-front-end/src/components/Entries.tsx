import {Link, Route, Switch} from 'react-router-dom';
import Entry from './Entry';

const Entries = () => {
  return (
    <div>
      <h2>Entries</h2>

      <div>
        <Link to="/entries/1">Entry Title #1</Link><br/>
        <Link to="/entries/2">Entry Title #2</Link><br/>
        <Link to="/entries/3">Entry Title #3</Link><br/>
        <Link to="/entries/4">Entry Title #4</Link><br/>
        <Link to="/entries/5">Entry Title #5</Link>
      </div>

      <Switch>
        <Route path="/entries/:entryId" component={Entry} />
        <Route path="/entries">
          <h2>Please choose a entry from the list above</h2>
        </Route>
      </Switch>
    </div>
  );
};

export default Entries;
