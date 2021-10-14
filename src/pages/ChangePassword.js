import React, { useContext, useState } from "react";
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
import Cookies from "js-cookie";
import { UserContext } from "../context/UserContext";
import { useHistory } from "react-router-dom";
import { Alert } from "../atoms/alert/Alert";
import { useParams } from "react-router-dom";
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
  let { token } = useParams();
  let history = useHistory();
  const classes = useStyles();
  const { control, register, handleSubmit } = useForm();
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const onSubmit = (data) => {
    
    const {email} = data;
    if (email) {
      Axios.put(`auth/reset-password/${token}`, {
        email: email,
      }).then((res) => {  
        console.log(res)
        if (res) {
        console.log(res)
          history.push("/");
        } else {
          handleClickOpen();
        }
      });
    } else {
      handleClickOpen();
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography text="Change Password" variant="h4" />
        {open && (
          <Alert
            severity="error"
            title="Error Login failed."
            className="formInfo"
          ></Alert>
        )}
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
                id="password"
                type="password"
                label="New Password"
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
            Change Password
          </Button>
        </form>
      </div>
    </Container>
  );
}
