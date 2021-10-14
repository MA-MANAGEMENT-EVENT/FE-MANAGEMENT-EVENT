import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import Typography from "../../atoms/typography/Typhography";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Container from "@mui/material/Container";
import logo from "../nav/logoMA2.png";
import { set } from "js-cookie";


const Nav = (props) => {

  const [user,setUser] = useContext(UserContext);
  const handleLogout = () => {
    setUser({role:"guest"})
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
                      <Typography
                        variant="body1"
                        text="Home"
                        className="link"
                      />
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
                {user.role === "ROLE_USER" && (
                  <>
                    <Link
                      to="/home"
                      style={{
                        textDecoration: "none",
                        padding: 10,
                        marginLeft: "auto",
                      }}
                    >
                      <Typography
                        variant="body1"
                        text="Home"
                        className="link"
                      />
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
                    <Link
                      to="/home"
                      style={{ textDecoration: "none", padding: 10 }}
                      onClick={() => handleLogout()}
                    >
                      <Typography
                        variant="body1"
                        text="LogOut"
                        className="linklogout"
                      />
                    </Link>
                  </>
                )}
                {/* Admin Route */}
                {user.role === "ROLE_ADMIN" && (
                  <>
                    <Link
                      to="/manageevent"
                      style={{
                        textDecoration: "none",
                        padding: 10,
                        marginLeft: "auto",
                      }}
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
                      to="/Home"
                      style={{ textDecoration: "none", padding: 10 }}
                      onClick={() => handleLogout()}
                    >
                      <Typography
                        variant="body1"
                        text="LogOut"
                        className="linklogout"
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
