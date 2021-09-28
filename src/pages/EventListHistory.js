import React from "react";
import { Link } from "react-router-dom";
import TextField from "../atoms/textfield/TextField";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "../atoms/typography/Typhography";
import Button from "../atoms/button/Button";
import { Box } from '@mui/system'

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
    marginTop:20,
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    backgroundColor: "#FAF8FF",
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

const EventListHistory = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.heroContent} style={{ marginTop: 10 }}>
        <Container maxWidth="sm">
          <Typography
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom
            text="My Events"
          />
         <Box
        sx={{
        marginLeft:15,
          width: 300,
          height: 80,
          bgcolor: '#00B4B8',
          borderRadius: "10px",
          '&:hover': {
            backgroundColor: '#009ACA',
            opacity: [0.9, 0.8, 0.7],
          },
        }}><h3 style={{marginLeft:70, marginTop:20}}>I have attended <p>() Events</p></h3></Box>
        </Container>
      </div>
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          {cards.map((card) => (
            <Grid item key={card} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image="https://source.unsplash.com/random"
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    text="Heading"
                  />
                  <Typography
                    text=" This is a media card. You can use this section to describe
                    the content."
                  />
                </CardContent>
                <CardActions>
                   <Link to="/Detail" style={{ textDecoration: "none", padding: 10 }}>
                    <Button size="small" color="primary" text="view" />
                  </Link>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};
export default EventListHistory;
