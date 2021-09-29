import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/Signup";
import FeedbackForm from "../pages/user/FormFeedback"
import History from "../pages/user/History";
import ManageEvent from "../pages/admin/ManageEvent"
import EditEvent from "../pages/admin/EditEvent"
import ManageFeedback from "../pages/admin/ManageFeedback"
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
        <Route exact path="/feedback" component={FeedbackForm} />
        <Route exact path="/history" user={user} component={History} />
        
        {/* login route */}
        <LoginRoute exact path="/login" user={user} component={Login} />
        <LoginRoute exact path="/signup" user={user} component={SignUp} />
        
        {/* admin route */}
        <Route
         exact
         path="/manageevent"
         user={user}
         component={ManageEvent}/>

         <Route
         exact
         path="/editevent"
         user={user}
         component={EditEvent}/>

         <Route
         exact
         path="/managefeedback"
         user={user}
         component={ManageFeedback}/>
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
