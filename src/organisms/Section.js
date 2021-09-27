import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/Signup";
const Section = () => {
  const [user] = useContext(UserContext);

  const PrivateRoute = ({ user, ...props }) => {
    if (user) {
      return <Route {...props} />;
    } else {
      return <Redirect to="/login" />;
    }
  };

  const LoginRoute = ({ user, ...props }) =>
    user ? <Redirect to="/home" /> : <Route {...props} />;

  return (
    <div className="section">
      <Switch>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route exact path="/home" component={Home} />
        <LoginRoute exact path="/login" user={user} component={Login} />
        <LoginRoute exact path="/signup" user={user} component={SignUp} />

        {/* <PrivateRoute
          exact
          path="/movielist"
          user={user}
          component={MovieList}
        />
        <PrivateRoute exact path="/movie" user={user} component={Movies} />
        <PrivateRoute
          exact
          path="/movie/create"
          user={user}
          component={MovieForm}
        />
        <PrivateRoute
          exact
          path="/movie/edit/:id"
          user={user}
          component={MovieForm}
        />
        <PrivateRoute
          exact
          path="/movie/review/:id"
          user={user}
          component={MovieReview}
        />

        <PrivateRoute exact path="/gamelist" user={user} component={GameList} />
        <PrivateRoute exact path="/game" user={user} component={Games} />
        <PrivateRoute
          exact
          path="/game/create"
          user={user}
          component={GameForm}
        />
        <PrivateRoute
          exact
          path="/game/edit/:id"
          user={user}
          component={GameForm}
        />
        <PrivateRoute
          exact
          path="/game/review/:id"
          user={user}
          component={GameReview}
        />

        <PrivateRoute
          exact
          path="/changepassword"
          user={user}
          component={ChangePassword}
        /> */}
      </Switch>
    </div>
  );
};
export default Section;
