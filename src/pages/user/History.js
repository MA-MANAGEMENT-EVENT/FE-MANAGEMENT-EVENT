import React, { useEffect, useState } from "react";
import Container from "@material-ui/core/Container";
import Typography from "../../atoms/typography/Typhography";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@mui/system";
import Button from "../../atoms/button/Button";
import Paper from "@mui/material/Paper";
import Grid from "../../atoms/grid/index";
import { Link } from "react-router-dom";
import Axios from "axios";

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
  const [history, setHistory] = useState(null);
  useEffect(() => {
    if (history === null) {
      const token = localStorage.getItem("token");
      const userId = localStorage.getItem("userId");

      Axios({
        method: "get",
        url: `event-registration/history/${userId}`,
      }).then((res) => {
        console.log(res);
        setHistory(res.data);
      });
    }
  });
  const classes = useStyles();
  return (
    <>
      {history && (
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
            {history.map((data) => {
              return (
                <Paper elevation={5} sx={{ mx: "auto", p: 5 }}>
                  <Grid container>
                    <Grid item xs={4}>
                      <Typography
                        align="left"
                        color="textSecondary"
                        text={data.event.name}
                        paragraph
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <Typography
                        align="center"
                        color="textSecondary"
                        text={`${data.event.startDate} - ${data.event.endDate}`}
                        paragraph
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <div style={{ marginTop: -5, float: "right" }}>
                        <Link
                          to={`/feedback/${data.event.id}`}
                          style={{ textDecoration: "none", padding: 10 }}
                        >
                          <Button
                            size="small"
                            color="primary"
                            text="Feedback"
                          />
                        </Link>
                      </div>
                    </Grid>
                  </Grid>
                </Paper>
              );
            })}
          </Box>
        </>
      )}
    </>
  );
};

export default History;
