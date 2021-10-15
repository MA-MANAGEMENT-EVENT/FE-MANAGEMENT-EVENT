import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

export default function Main(props) {
  
  const { description, title } = props;

  return (
    <>
      <Grid item xs={12} md={8} style={{borderRight: "1px gainsboro solid"}}>
        <Typography variant="h6" gutterBottom style={{fontSize:28, fontWeight:"600", marginBottom:20}}>
          {title}
        </Typography>
        <Typography variant="subtitle1" gutterBottom style={{fontSize: 18, marginTop: 40}}>
          {description}
        </Typography>
      </Grid>
    </>
  );
}

Main.propTypes = {
  posts: PropTypes.array,
  title: PropTypes.string,
};
