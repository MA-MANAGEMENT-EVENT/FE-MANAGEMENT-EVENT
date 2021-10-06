import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import Typography from "../../atoms/typography/Typhography";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Container from "@mui/material/Container";
import logo from "../nav/logoMA2.png";

const Nav = (props) => {
  const [user, setUser] = useContext(UserContext);
  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };
  return (
    <>
      <AppBar data-testid={props.datatest} position={props.position}>
        <Container>
          <Toolbar>
            <Link
              to="/home"
              style={{
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
              }}
            >
              <img src={logo} alt="logo" style={{ width: "50px" }} />
              <Typography
                variant="h6"
                text="METROEVENT"
                className="logo"
                style={{ marginLeft: 10.0 }}
              />
            </Link>
            

            {/* User / Admin Route */}
            {user && (
              <>
                {user.role === "guest" && (
                  <>
                  <Link
              to="/home"
              style={{
                textDecoration: "none",
                padding: 10,
                marginLeft: "auto",
              }}
            >
              <Typography variant="body1" text="Home" className="link" />
            </Link>
                    <Link
                      to="/login"
                      style={{ textDecoration: "none", padding: 10 }}
                    >
                      <Typography
                        variant="body1"
                        text="Login"
                        className="link"
                      />
                    </Link>
                    <Link
                      to="/signup"
                      style={{ textDecoration: "none", padding: 10 }}
                    >
                      <Typography
                        variant="body1"
                        text="Signup"
                        className="link"
                      />
                    </Link>
                  </>
                )}
              

                {/* User Route */}
                {user.role === "user" && (
                  <>
                  <Link
              to="/home"
              style={{
                textDecoration: "none",
                padding: 10,
                marginLeft: "auto",
              }}
            >
              <Typography variant="body1" text="Home" className="link" />
            </Link>
                    <Link
                      to="/history"
                      style={{ textDecoration: "none", padding: 10 }}
                    >
                      <Typography
                        variant="body1"
                        text="History"
                        className="link"
                      />
                    </Link>
                    
                  </>
                )}
                {/* Admin Route */}
                {user.role === "admin" && (
                  <>
                    <Link
                      to="/manageevent"
                      style={{ textDecoration: "none", padding: 10, marginLeft:"auto" }}
                    >
                      <Typography
                        variant="body1"
                        text="Manage Event"
                        className="link"
                      />
                    </Link>
                    <Link
                      to="/managespeaker"
                      style={{ textDecoration: "none", padding: 10 }}
                    >
                      <Typography
                        variant="body1"
                        text="Manage Speaker"
                        className="link"
                      />
                    </Link>
                    <Link
                      to="/createevent"
                      style={{ textDecoration: "none", padding: 10 }}
                    >
                      <Typography
                        variant="body1"
                        text="Create Event"
                        className="link"
                      />
                    </Link>
                  
                    
                  
                  </>
                )}
                  {user.role === "user" || user.role === "admin" && (
                  <>
                    <Link
                      to="/logout"
                      style={{ textDecoration: "none", padding: 10 }}
                    >
                      <Typography
                        variant="body1"
                        text="LogOut"
                        className="link"
                      />
                    </Link>
                  </>
                )}
              </>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Nav;
