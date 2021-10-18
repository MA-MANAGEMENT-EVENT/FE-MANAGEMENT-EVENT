import React from "react";
import Button from "../atoms/button/Button";
import Typography from "../atoms/typography/Typhography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "../atoms/grid/index";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
const useStyles = makeStyles(() => ({
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

const ButtonColor = (text) => {
  switch (text) {
    case "Edit":
      return "#f0ad4e";
    case "Delete":
      return "#FF0000";
    default:
      return "#3f50b5";
  }
};
const CardEvent = (props) => {
  const classes = useStyles();
  return (
    <>
      <Grid item key={props.eventId} xs={12} sm={6} md={4}>
        <Card className={classes.card}>
          <CardMedia
            className={classes.cardMedia}
            image={props.imageUrl}
            title="Image title"
          />
          <CardContent className={classes.cardContent}>
            
            {props.status && (
              <>
                <span
                  style={{
                    fontWeight: "bold",
                    backgroundColor: "#FFA500",
                    color: "white",
                    padding: 5,
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    
                  }}
                >
                  {props.status}
                </span>
                
              </>
            )}{" "}
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              text={props.title}
              className="cardTitle"
            />
            <Typography text={props.description} className="cardtext" />
          </CardContent>

          <Grid container style={{marginLeft: 10, marginBottom: 15 }}>
            {props.link.map((value, i) => {
              return (
                <Grid item xs={3.5}>
                  <Link
                    to={value}
                    style={{ textDecoration: "none", padding: 5 }}
                  >
                    <Button
                      size="small"
                      text={props.linkText[i]}
                      style={{
                        backgroundColor: ButtonColor(props.linkText[i]),
                      }}
                    />
                  </Link>
                </Grid>
              );
            })}
          </Grid>
        </Card>
      </Grid>
    </>
  );
};
export default CardEvent;
