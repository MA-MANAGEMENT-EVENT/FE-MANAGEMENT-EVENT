import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import RoomIcon from "@mui/icons-material/Room";
import AccessTimeFilledTwoToneIcon from "@mui/icons-material/AccessTimeFilledTwoTone";
import PersonIcon from "@mui/icons-material/Person";

const useStyles = makeStyles((theme) => ({
  detailHeader: {
    position: "relative",
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: "url(https://source.unsplash.com/random)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,.3)",
  },
  detailHeaderContent: {
    position: "relative",
    padding: theme.spacing(3),
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
}));

export default function DetailHeader(props) {
  const classes = useStyles();
  const { post } = props;

  return (
    <Paper
      className={classes.detailHeader}
      style={{ backgroundImage: `url(${post.image})` }}
    >
      {/* Increase the priority of the hero background image */}
      {
        <img
          style={{ display: "none"
          , opacity:0.5
        }}
          src={post.image}
          alt={post.imageText}
        />
      }
      <div className={classes.overlay} />
      <Grid container>
        <Grid item md={10}>
          <div className={classes.detailHeaderContent}>
            <Typography
              component="h1"
              variant="h3"
              color="inherit"
              gutterBottom
              style= {{marginBottom: 20}}
            >
              {post.title}
            </Typography>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: 10.0,
                marginTop: 10.0,
              }}
            >
              <PersonIcon />
              <Typography
                style={{
                  fontSize: 20,
                  marginLeft: 20,
                  fontStretch: "ultra-expanded",
                }}
              >
                {post.speaker}
              </Typography>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: 10.0,
                marginTop: 10.0,
              }}
            >
              <RoomIcon />
              <Typography style={{fontSize: 20, marginLeft: 20, fontStretch: "ultra-expanded"}}>
                {post.location}
              </Typography>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: 10.0,
                marginTop: 10.0,
              }}
            >
              <AccessTimeFilledTwoToneIcon />
              <Typography
                style={{
                  fontSize: 20,
                  marginLeft: 20,
                  fontStretch: "ultra-expanded",
                }}
              >
                {post.time}
              </Typography>
            </div>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
}

DetailHeader.propTypes = {
  post: PropTypes.object,
};
