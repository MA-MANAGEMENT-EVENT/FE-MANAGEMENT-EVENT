import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/Signup";
import Detail from "../pages/user/DetailEvent";
import Feedback from "../pages/user/Feedback";
import History from "../pages/user/History";
import ManageEvent from "../pages/admin/ManageEvent";
import EventForm from "../pages/admin/EventForm";
import ManageParticipantFeedback from "../pages/admin/ManageParticipantFeedback";
import PageNotFound from "../pages/PageNotFound";
import ChangePassword from "../pages/ChangePassword";
import ResetPassword from "../pages/ResetPassword";
import ManageSpeaker from "../pages/admin/ManageSpeaker";
import FeedbackQuestion from "../pages/admin/FeedbackQuestion";
import Verification from "../pages/verification";
const Section = () => {
  const [user] = useContext(UserContext);
  const LoginRoute = ({ user, ...props }) =>
    user ? <Route {...props} /> : <Redirect to="/home" />;

  return (
    <div className="section">
      <Switch>
        <Route exact path="/detailevent/:id" user={user} component={Detail} />
        {user.role === "guest" && (
              <>
                <Switch>
                  <Route exact path="/">
                    <Redirect to="/home" />
                  </Route>
                  <Route exact path="/home" component={Home} />
                  <Route exact path="/auth/confirm/:token" component={Verification}/>
              
                  <LoginRoute
                    exact
                    path="/login"
                    user={user}
                    component={Login}
                  />
                  <LoginRoute
                    exact
                    path="/signup"
                    user={user}
                    component={SignUp}
                  />
                  <LoginRoute
                    exact
                    path="/auth/reset-password/:token"
                    user={user}
                    component={ChangePassword}
                  />
                  <LoginRoute
                    exact
                    path="/resetpassword"
                    user={user}
                    component={ResetPassword}
                  />

                  <Route component={PageNotFound} />
                </Switch>
              </>
            )}
        {user && (
          <>
            {/* login route */}
         
            {user.role === "ROLE_USER" && (
              <>
                {/* user route */}
                <Switch>
                  <Route exact path="/">
                    <Redirect to="/home" />
                  </Route>
                  <Route exact path="/home" component={Home} />
                  <Route
                    exact
                    path="/feedback/:id/:regis"
                    user={user}
                    component={Feedback}
                  />
                  <Route
                    exact
                    path="/history"
                    user={user}
                    component={History}
                  />

                  <Route component={PageNotFound} />
                </Switch>
              </>
            )}
            {user.role === "ROLE_ADMIN" && (
              <>
                {/* admin route */}
                <Switch>
                  <Route exact path="/">
                    <Redirect to="/manageevent" />
                  </Route>
                  <Route
                    exact
                    path="/manageevent"
                    user={user}
                    component={ManageEvent}
                  />
                  <Route
                    exact
                    path="/managespeaker"
                    user={user}
                    component={ManageSpeaker}
                  />
                  <Route
                    exact
                    path="/editevent/:id"
                    user={user}
                    component={EventForm}
                  />
                  <Route
                    exact
                    path="/question"
                    user={user}
                    component={FeedbackQuestion}
                  />
                  <Route
                    exact
                    path="/createevent"
                    user={user}
                    component={EventForm}
                  />
                  <Route
                    exact
                    path="/manageparticipantandfeedback/:id"
                    user={user}
                    component={ManageParticipantFeedback}
                  />
                  {/* not found */}
                  <Route component={PageNotFound} />
                </Switch>
              </>
            )}
          </>
        )}
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
};
export default Section;
