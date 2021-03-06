import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../../context/UserContext";
import Container from "@material-ui/core/Container";
import Typography from "../../atoms/typography/Typhography";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@mui/system";
import Button from "../../atoms/button/Button";
import Paper from "@mui/material/Paper";
import Grid from "../../atoms/grid/index";
import { Link } from "react-router-dom";
import Axios from "axios";
import Loading from "react-loading-animation";

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

const History = () => {
  const [user] = useContext(UserContext);
  const [history, setHistory] = useState(null);
  useEffect(() => {
    window.scrollTo(0, 0);
    if (history === null) {
      Axios({
        method: "get",
        url: `event-registration/history/${user.id}`,
      }).then((res) => {
        setHistory(res.data);
      });
    }
  });
  const classes = useStyles();
  return (
    <>
      {history === null && (
        <>
          <div style={{ marginTop: 200 }}>
            <Loading />
          </div>
        </>
      )}
      {history && (
        <Container>
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
                <>
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
                      {data.statusFeedback !== "Complete" && (
                        <>
                          <Grid item xs={4}>
                            <div style={{ marginTop: -5, float: "right" }}>
                              <Link
                                to={`/feedback/${data.event.id}/${data.id}`}
                                style={{ textDecoration: "none", padding: 10 }}
                              >
                                <Button
                                  size="small"
                                  color="primary"
                                  text="Feedback"
                                  style={{
                                    backgroundColor: "#3f50b5",
                                  }}
                                />
                              </Link>
                            </div>
                          </Grid>
                        </>
                      )}
                    </Grid>
                  </Paper>
                  <br />
                </>
              );
            })}
          </Box>
        </Container>
      )}
    </>
  );
};

export default History;
