import { HashRouter, Route, Redirect, Switch } from "react-router-dom";

import Home from "../Routes/Home";
import Detail from "../Routes/Detail";
import ShoppingCart from "../Routes/ShoppingCart";

const Router: React.FC = () => (
  <HashRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/item/:id" component={Detail} />
      <Route path="/tv" component={ShoppingCart} />
      <Redirect from="*" to="/" />
    </Switch>
  </HashRouter>
);

export default Router;
