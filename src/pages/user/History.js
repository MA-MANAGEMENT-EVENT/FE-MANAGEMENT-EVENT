import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "../../atoms/typography/Typhography";
import Box from '@material-ui/core/Box';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import Paper from '@mui/material/Paper';

const useStyles = makeStyles((theme) => ({
    icon: {
      marginRight: theme.spacing(2),
    },
    heroContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 6),
    },
    heroBoxs: {
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
  
  const cards = [1, 2, 3, 4, 5, 6];

const History = ()=>{
    const classes = useStyles();

    return(<><div className={classes.heroContent} style={{ marginTop: 10 }}>
        <Container maxWidth="sm">
          <Typography
            variant="h3"
            align="center"
            color="textPrimary"
            gutterBottom
            text="My History Events"
          />
          <div className={classes.heroBoxs}>
            <Box border={1} container spacing={2} justifyContent="center">
                <Typography
                variant="h6"
                align="center"
                color="textPrimary"
                gutterBottom
                text="I have Attended .. Events"
            />
            </Box>
          </div>
        </Container>
      </div>
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          {cards.map((card) => (
            <Grid item key={card} xs={12} sm={6} md={6}>
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
                   <Box border={1}>
                <Grid container direction="row">
                <Grid item>
                    <AccountCircleSharpIcon />
                </Grid>
                <Grid item>
                    Nama Peserta
                </Grid>
                </Grid>
                <h6>"Saya senang bisa mengikuti event tersebut, 
                thank you for inspiring me!</h6>
                   </Box>

                {/* second box */}
                   <Box border={1}>
                <Grid container direction="row">
                <Grid item>
                    <AccountCircleSharpIcon />
                </Grid>
                <Grid item>
                    Nama Peserta
                </Grid>
                </Grid>
                <h6>"Saya senang bisa mengikuti event tersebut, 
                thank you for inspiring me!</h6>
                   </Box>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

    </>)
}
export default History