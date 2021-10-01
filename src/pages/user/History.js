import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "../../atoms/typography/Typhography";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@mui/system";
import Button from "../../atoms/button/Button";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";



const useStyles = makeStyles((theme) => ({
  heroContent: {
    padding: theme.spacing(8, 0, 6),
    marginTop: 20,
  },
  item: {
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const history = [
  {
    id: 1,
    name: "Belajar Kotlin to Build Android App",
  },
  {
    id: 2,
    name: "How to Start Javascipt to build",
  },
  {
    id: 3,
    name: "Belajar Kotlin to Build Android App",
  },
  {
    id: 4,
    name: "Belajar Kotlin to Build Android App",
  },
];

const countHistory = history.filter((item) => item.id).length;

const History = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.heroContent} style={{ marginTop: 5 }}>
        <Container maxWidth="sm">
          <Typography
            variant="h4"
            align="center"
            color="textPrimary"
            gutterBottom
            text="Events History"
          />
        </Container>
      </div>

      <Box>
        <Paper elevation={5} sx={{ mx: "auto", p: 5 }}>
          <Grid container>
            <Grid item xs={4}>
              <Typography
                align="left"
                color="textSecondary"
                text="Never Stop Learning, Because Life Never Stops Teaching."
                paragraph
              />
            </Grid>
            <Grid item xs={4}>
              <Typography
                align="center"
                color="textSecondary"
                text="11/12/2021"
                paragraph
              />
            </Grid>
            <Grid item xs={4}>
              <div style={{ marginTop: -5, float: "right" }}>
                <Button size="small" color="primary" text="Feedback" />
              </div>
            </Grid>
          </Grid>
        </Paper>

        <Paper elevation={5} sx={{ my: 4, mx: "auto", p: 5 }}>
          <Grid container>
            <Grid item xs={4}>
              <Typography
                align="left"
                color="textSecondary"
                text="Never Stop Learning, Because Life Never Stops Teaching."
                paragraph
              />
            </Grid>
            <Grid item xs={4}>
              <Typography
                align="center"
                color="textSecondary"
                text="11/12/2021"
                paragraph
              />
            </Grid>
            <Grid item xs={4}>
              <div style={{ marginTop: -5, float: "right" }}>
                <Button size="small" color="primary" text="Feedback" />
              </div>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </>
  );
};

export default History;
