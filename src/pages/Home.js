import React, { useState, useEffect } from "react";
import TextField from "../atoms/textfield/TextField";
import Typography from "../atoms/typography/Typhography";
import Grid from "../atoms/grid/index";
import CardEvent from "../molecules/cardevent";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Axios from "axios";
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
}));

const Home = () => {
  const [dataEvents, setdataEvents] = useState(null);
  const [filteredEvents, setFilteredEvents] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (dataEvents === null) {
      Axios.get(`event`).then((res) => {
        let filter = res.data.filter((data) => data.status.name === "Publish");
        setdataEvents(filter);
        setFilteredEvents(filter);
      });
    }
    if (filteredEvents === null) {
      setFilteredEvents(dataEvents);
    }
  }, [dataEvents, filteredEvents]);
  const classes = useStyles();
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
      {filteredEvents === null && (
        <div style={{ marginTop: 20 }}>
          <Loading />
        </div>
      )}
      {filteredEvents && (
        <>
          <Container className={classes.cardGrid} maxWidth="md">
            <Grid container spacing={4}>
              {filteredEvents.map((event) => (
                <CardEvent
                  eventId={event.id}
                  imageUrl={"https://source.unsplash.com/random"}
                  title={event.name}
                  description={event.description}
                  link={[`/detailevent/${event.id}`]}
                  linkText={["View"]}
                />
              ))}
            </Grid>
          </Container>
        </>
      )}
    </>
  );
};
export default Home;
