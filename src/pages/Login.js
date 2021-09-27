import Template from "../templates/Template";
import Button from '@mui/material/Button';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';

const Login = () => {
  const useStyles = makeStyles((theme) => ({
    form: {
      width: '100%',
      marginTop:'10px',
    },
  }));

  return (
    
    <Container component="main" maxWidth="xs">
    <Typography component="h1" variant="h5">
         Log in
        </Typography>
    <form>
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
      <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
    </form>
    
    </Container>
  );
};
export default Login;
