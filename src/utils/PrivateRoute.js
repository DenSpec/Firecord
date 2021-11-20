// Fonctionnalité
import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "../auth/backend/Auth";

// Si la personne n'est pas connecté, renvoie le directement vers login ; quand le PrivateRoute est en action.
const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  const {currentUser} = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={routeProps =>
        !!currentUser ? (
          <RouteComponent {...routeProps} />
        ) : (
          <Redirect to={"/login"} />
        )
      }
    />
  );
};


export default PrivateRoute