import React, { useEffect, useState } from "react";
import Typography from "../atoms/typography/Typhography";
import Grid from "../atoms/grid/index";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Button from "../atoms/button/Button";
import { useParams } from "react-router-dom";
import Axios from "axios";
const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(2),
  },
}));
const Verification = () => {
  let { token } = useParams();
  const [status, setStatus] = useState(null);
  const handleStatus = (value) => {
    setStatus(value);
  };
  useEffect(() => {
    Axios.get(`auth/confirm/${token}`).then((res) => {
      if (res) {
        handleStatus(true);
      } else {
        handleStatus(false);
      }
    });
  });
  const classes = useStyles();
  return (
    <>
      {status && (
        <>
          <div className={classes.heroContent} style={{ marginTop: 10 }}>
            <Container maxWidth="sm">
              <Typography
                variant="h1"
                align="center"
                color="textPrimary"
                gutterBottom
                text="Verification"
              />
              <Typography
                variant="h6"
                align="center"
                color="textSecondary"
                text={status?"Success":"Failed"}
                paragraph
              />

              <div className={classes.heroButtons}>
                <Grid container spacing={1} justifyContent="center">
                  <Link to="/home">
                    <Button
                      size="small"
                      color="primary"
                      text="Back To Home"
                      style={{
                        backgroundColor: "#3f50b5",
                      }}
                    />
                  </Link>
                </Grid>
              </div>
            </Container>
          </div>
        </>
      )}
    </>
  );
};
export default Verification;
