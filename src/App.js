// Fonctionnalités 
import React from "react";
import Home from "./page/Home";
import Login from "./auth/Login";
import { AuthProvider } from "./auth/backend/Auth";
import PrivateRoute from "./utils/PrivateRoute";
import Server from "./server/Server";
import NotFound from './utils/NotFound';
import HomeTest from './server/TestApp'
import HomeTest2 from './server/components/test/TestApp2'
import InServer from './server/components/server/InServer'
import InChannel from './server/components/channel/show/InChannel'
import Register from './auth/Register'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

/* Quand le private route est en action, si la personne n'est pas connecté
on le mène vers la Login page, grâce au "utiles/PrivateRoute.js" */
const App = () => {
  return (
    <AuthProvider>
      <Router>

        <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/server/:id" component={InServer} />
          <Route exact path="/server/channel/:id" component={InChannel} />
          <PrivateRoute exact path="/home" component={Server} />
          <PrivateRoute exact path="/hometest" component={HomeTest} />
          <Route exact path="/hometest2" component={HomeTest2} />
          <Route component={NotFound} />
        </Switch>
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
