import React from "react";
import TextField from "../atoms/textfield/TextField";
import Typography from "../atoms/typography/Typhography";
import Grid from "../atoms/grid/index";
import { useForm, Controller } from "react-hook-form";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Axios from "axios";
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Login() {
  const classes = useStyles();
  const { control, register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    Axios.post(`https://cors-anywhere.herokuapp.com/https://management-event-api.herokuapp.com/auth/login`, {
      email: data.email,
      password: data.password,
    }).then((res) => {
      console.log(res);
      // if(res.data==="invalid username or password"){
      //   handleClickOpen()
      // }else{
      //   setUser(res.data)
      //   localStorage.setItem("user", JSON.stringify({username: input.username, password: input.password}))
      // }
    });
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography text="Sign in" variant="h4" />
        <form
          className={classes.form}
          noValidate
          onSubmit={handleSubmit(onSubmit)}
        >
          <Controller
            render={({ field }) => (
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                autoComplete="email"
                autoFocus
                {...field}
              />
            )}
            control={control}
            name="email"
          />
          <Controller
            render={({ field }) => (
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="password"
                label="Password"
                autoComplete="password"
                autoFocus
                {...field}
              />
            )}
            control={control}
            name="password"
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="/resetpassword" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
