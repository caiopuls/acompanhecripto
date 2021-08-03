import { BrowserRouter, Route, Switch } from 'react-router-dom'

import teste from "./pages/{id}";
import Home from './pages/Home';

function App() {
  

  return (
    <BrowserRouter> 
        <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/coin/:id" exact component={teste} />
        <Route path="/coin/bitcoin" exact component={teste} />
        </Switch>
    </BrowserRouter>
  );
}

export default App;