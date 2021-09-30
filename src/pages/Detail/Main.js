import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
// import Divider from '@material-ui/core/Divider';
// import Markdown from './Markdown';

const useStyles = makeStyles((theme) => ({
  markdown: {
    ...theme.typography.body2,
    padding: theme.spacing(3, 0),
  },
}));

export default function Main(props) {
  const classes = useStyles();
  const { posts, post, title } = props;

  return (
    <>
      <Grid item xs={12} md={5}>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        {/* <Divider />
      {posts.map((post) => (
        <Markdown className={classes.markdown} key={post.substring(0, 40)}>
          {post}
        </Markdown>
      ))} */}
        <Typography variant="h6" gutterBottom paragraph="true">
       
          {posts.description}
 
        
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        md={3}
        style={{
          borderRight: "1px gainsboro solid",
          borderLeft: "1px gainsboro solid",
        }}
      >
        {/* <Typography variant="h6" gutterBottom>
          {title}
        </Typography> */}
        {/* <Divider />
      {posts.map((post) => (
        <Markdown className={classes.markdown} key={post.substring(0, 40)}>
          {post}
        </Markdown>
      ))} */}
        <Typography variant="h6" gutterBottom>
          <b>Speaker</b>
        </Typography>
        <Typography variant="h6" gutterBottom>
          {post.speaker}
        </Typography>
        <Typography variant="h6" gutterBottom style={{ marginTop: 20.0 }}>
          <b>Location</b>
        </Typography>
        <Typography variant="h6" gutterBottom>
          {post.location}
        </Typography>
        <Typography variant="h6" gutterBottom style={{ marginTop: 20.0 }}>
          <b>Date And Time</b>
        </Typography>
        <Typography variant="h6" gutterBottom>
          {post.time}
        </Typography>
      </Grid>
    </>
  );
}

Main.propTypes = {
  posts: PropTypes.array,
  title: PropTypes.string,
};
