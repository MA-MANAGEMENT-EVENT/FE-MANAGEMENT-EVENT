import Template from "../templates/Template";
import Button from '@mui/material/Button';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
// import { AccountBoxSharpIcon } from '@mui/icons-material';

const Login = () => {
  const useStyles = makeStyles((theme) => ({
    form: {
      width: '100%',
      marginTop:'10px',
    },
     containerLg: {
      marginTop: "100px",
      marginBottom: "8px"
    }
  }));
  
  const classes = useStyles();
  return (
    <Container component="main" maxWidth="xs"  
            className={`${classes.container} ${classes.containerLg}`}>
    {/* <AccountBoxSharpIcon /> */}
    <Typography component="h1" variant="h5" align="center">Log in </Typography>
    <form className={classes.form}>
    <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
     <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
      <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
          >Log in</Button>
      <Grid item style={{ marginTop:'20px' }}>
      Don't have an account? 
      <Link to="/Signup" variant="body2">
                {" Sign Up"}
      </Link>
      </Grid>
    </form>
    
    </Container>
  );
};
export default Login;
