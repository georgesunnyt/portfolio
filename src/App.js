import { Route, Switch } from 'react-router-dom';
import './App.css';
import Homepage from './homepage/Homepage';

function App() {
  return (
    <>
      <Switch>
        <Route>
          <Homepage></Homepage>
        </Route>
      </Switch>
    </>
  );
}

export default App;
