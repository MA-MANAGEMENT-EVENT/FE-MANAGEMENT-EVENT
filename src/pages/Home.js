import React, { useContext,useState,useEffect } from "react";
import { UserContext } from "../context/UserContext";
import TextField from "../atoms/textfield/TextField";
import Typography from "../atoms/typography/Typhography";
import Grid from "../atoms/grid/index";
import CardEvent from "../molecules/cardevent";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { EventContext } from "../context/EventContext";

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

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const Home = () => {
  const [dataEvents, setStatusForm] = useContext(EventContext);
  const [filteredEvents, setFilteredEvents] = useState(dataEvents);

  
  useEffect(() => {
    if (filteredEvents.length === 0 ) {
      setFilteredEvents(dataEvents)
    }
  })
  const classes = useStyles();
  const handleChange = (event) => {
    let value = event.target.value.toLowerCase();
    let result = [];

    result = dataEvents.filter((event) => {
      return event.name.toLowerCase().search(value) != -1;
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
  );
};
export default Home;
