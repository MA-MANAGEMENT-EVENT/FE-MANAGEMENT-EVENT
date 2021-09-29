import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import Typography from "../../atoms/typography/Typhography";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Container from '@mui/material/Container';
import logo from "../nav/logoMA2.png"
// import logo from "../nav/logoMA.png"

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
            <Link to="/Home" style={{ textDecoration: 'none', display:"flex", alignItems:"center"}}>
              <img src={logo} alt="logo" style={{width:"50px"}} />
              <Typography variant="h6" text="METROEVENT" className="logo" style={{marginLeft:10.0}} />
            </Link>
            <Link to="/Home" style={{ textDecoration: 'none',padding:10,marginLeft:"auto" }}>
              <Typography variant="h7" text="Home" className="link" />
            </Link>
            
            <Link to="/Login" style={{ textDecoration: 'none',padding:10 }}>
              <Typography variant="h7" text="Login" className="link"/>
            </Link>
            <Link to="/Signup" style={{ textDecoration: 'none',padding:10 }}>
              <Typography variant="h7" text="Signup" className="link" />
            </Link>
            {/* User route */}
            {user && (
              <Link to="/LogOut" style={{ textDecoration: 'none' ,padding:10}}>
              <Typography variant="h7" text="LogOut" className="link"/>
            </Link>
            )}
            {true && (
              <Link to="/History" style={{ textDecoration: 'none' ,padding:10}}>
              <Typography variant="h7" text="History" className="link" />
            </Link>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Nav;
