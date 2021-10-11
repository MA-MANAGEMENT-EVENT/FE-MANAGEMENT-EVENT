import React, { useContext } from "react";
import TextField from "../../atoms/textfield/TextField";
import Typography from "../../atoms/typography/Typhography";
import Grid from "../../atoms/grid/index";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import CardEvent from "../../molecules/cardevent";
import { EventContext } from "../../context/EventContext";
import Axios from "axios";
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

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const ManageEvent = () => {
  const classes = useStyles();
  const [dataEvents,setStatusForm] = useContext(EventContext);
  const handleEdit = () => {
    setStatusForm("edit");
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
              <TextField label="Search Event" value="" className="trainer" />
            </Grid>
          </div>
        </Container>
      </div>
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={2}>
          {dataEvents.map((event) => (
            <CardEvent
              eventId={event.id}
              imageUrl={"https://source.unsplash.com/random"}
              title={event.name}
              description={
                event.description
              }
              link={[`/detailevent/${event.id}`, `/editevent/${event.id}`, "/delete"]}
              linkText={["View", "Edit", "Delete"]}
            />
          ))}
        </Grid>
      </Container>
    </>
  );
};
export default ManageEvent;
