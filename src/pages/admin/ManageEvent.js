import React, { useState, useEffect } from "react";
import TextField from "../../atoms/textfield/TextField";
import Typography from "../../atoms/typography/Typhography";
import Grid from "../../atoms/grid/index";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import CardEvent from "../../molecules/cardevent";
import Axios from "axios";
import Button from "../../atoms/button/Button";
import { Link } from "react-router-dom";
import Loading from "react-loading-animation";
const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%",
  },
  cardContent: {
    flexGrow: 1,
  },
}));

const ManageEvent = () => {
  const classes = useStyles();
  const [dataEvents, setdataEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);

  useEffect(() => {
    if (dataEvents.length === 0) {
      Axios.get(`event`).then(
        (res) => {
          setdataEvents(res.data);
          setFilteredEvents(res.data);
        }
      );
    }
    if (filteredEvents.length === 0) {
      setFilteredEvents(dataEvents);
    }
  },[dataEvents,filteredEvents.length]);
  const handleChange = (event) => {
    let value = event.target.value.toLowerCase();
    let result = [];
    result = dataEvents.filter((event) => {
      return event.name.toLowerCase().search(value) !== -1;
    });
    setFilteredEvents(result);
  };
  return (
    <>
      {dataEvents === null && (
        <div style={{ marginTop: 200 }}>
          <Loading />
        </div>
      )}
      {filteredEvents && (
        <>
          <div className={classes.heroContent} style={{ marginTop: 10 }}>
            <Container maxWidth="sm">
              <Typography
                variant="h2"
                align="center"
                color="textPrimary"
                gutterBottom
                text="Metroevent"
              />
              <Typography
                variant="h5"
                align="center"
                color="textSecondary"
                text="Never Stop Learning, Because Life Never Stops Teaching."
                paragraph
              />

              <div className={classes.heroButtons}>
                <Grid container spacing={2} justifyContent="center">
                  <Link
                    to="/createevent"
                    style={{ textDecoration: "none", padding: 10 }}
                  >
                    <Button
                      size="small"
                      text="Create Event"
                      style={{
                        backgroundColor: "#5cb85c",
                      }}
                    />
                  </Link>
                </Grid>
                <br />
                <br />
                <Grid container spacing={2} justifyContent="center">
                  <TextField
                    label="Search Event"
                    name="search"
                    className="trainer"
                    onChange={handleChange}
                  />
                </Grid>
              </div>
            </Container>
          </div>
          <Container className={classes.cardGrid} maxWidth="md">
            <Grid container spacing={2}>
              {filteredEvents.map((event) => (
                <CardEvent
                  eventId={event.id}
                  imageUrl={"https://source.unsplash.com/random"}
                  title={event.name}
                  status={event.status.name}
                  description={event.description}
                  link={[`/detailevent/${event.id}`, `/editevent/${event.id}`]}
                  linkText={["View", "Edit"]}
                />
              ))}
            </Grid>
          </Container>
        </>
      )}
    </>
  );
};
export default ManageEvent;
