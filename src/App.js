// Fonctionnalités //
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
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// L'app //  

// Comme vous voyez pour le /server, le private route se met en action.
// Le component est affiché géneralement en bas de page, ex : export default APP.
const App = () => {
  return (
    <AuthProvider>
      <Router>

        <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
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