import React, { useContext } from "react";
import Typography from "../atoms/typography/Typhography";
import Grid from "../atoms/grid/index";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Button from "../atoms/button/Button";

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(2),
  },
}));
const PageNotFound = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.heroContent} style={{ marginTop: 10 }}>
        <Container maxWidth="sm">
          <Typography
            variant="h1"
            align="center"
            color="textPrimary"
            gutterBottom
            text="404"
          />
          <Typography
            variant="h6"
            align="center"
            color="textSecondary"
            text="The Page You Requested Could Not Found"
            paragraph
          />
          <Typography
            variant="subtitle1"
            align="center"
            color="textSecondary"
            text="Sorry, maybe the page has been deleted or the URL you entered is wrong"
          />
          <div className={classes.heroButtons}>
            <Grid container spacing={1} justifyContent="center">
              <Link to="/home">
                <Button size="small" color="primary" text="Back To Home" />
              </Link>
            </Grid>
          </div>
        </Container>
      </div>
    </>
  );
};
export default PageNotFound;
