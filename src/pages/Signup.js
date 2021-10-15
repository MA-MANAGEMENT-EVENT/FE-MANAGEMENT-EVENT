import React from "react";
import TextField from "../atoms/textfield/TextField";
import Typography from "../atoms/typography/Typhography";
import Grid from "../atoms/grid/index";
import { useForm, Controller } from "react-hook-form";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Axios from "axios";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  let history = useHistory();
  const classes = useStyles();
  const { control,handleSubmit } = useForm();
  
  const onSubmit = (data) => {
    const { email, job, name, password, check } = data;
    if (email && job && name && password && check) {
      Axios.post(`auth/register`, {
        email: email,
        job: job,
        name: name,
        password: password,
      }).then((res) => {
   
        if (res) {
          Swal.fire("Success", "Signup Success Check Your Email For Verification", "success");
          history.push("/login");
        } else {
          Swal.fire("Error", "Signup failed ", "error");
        }
      });
    
    } else {
      Swal.fire("Failed", "Please fill in all the required fields.", "error");
    }
  };
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography text="Sign up" variant="h4" />
       
        <form
          className={classes.form}
          noValidate
          onSubmit={handleSubmit(onSubmit)}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Controller
                render={({ field }) => (
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="name"
                    label="Name"
                    autoComplete="name"
                    autoFocus
                    {...field}
                  />
                )}
                control={control}
                name="name"
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                render={({ field }) => (
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    label="Email"
                    autoComplete="email"
                    {...field}
                  />
                )}
                control={control}
                name="email"
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                render={({ field }) => (
                  <TextField
                    variant="outlined"
                    type="password"
                    required
                    fullWidth
                    id="password"
                    label="Password"
                    autoComplete="password"
                    {...field}
                  />
                )}
                control={control}
                name="password"
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                render={({ field }) => (
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="job"
                    label="Job"
                    autoComplete="job"
                    {...field}
                  />
                )}
                control={control}
                name="job"
              />
            </Grid>
            <Grid item xs={12}>
            <Controller
                render={({ field }) => (
                  <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="By clicking Sign Up, you agree to our Terms, Data Policy and Cookie Policy."
                  {...field}
                />
                )}
                control={control}
                name="check"
              />
              {/* <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="By clicking Sign Up, you agree to our Terms, Data Policy and Cookie Policy."
              /> */}
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
