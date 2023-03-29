import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
    </Switch>
  );
}
