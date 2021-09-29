import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
// import GitHubIcon from "@material-ui/icons/GitHub";
// import FacebookIcon from "@material-ui/icons/Facebook";
// import TwitterIcon from "@material-ui/icons/Twitter";
import MainFeaturedPost from "./MainFeaturedPost";
import FeaturedPost from "./FeaturedPost";
import Main from "./Main";
import Sidebar from "./Sidebar";
import post1 from "./blog-post.1.md";
import post2 from "./blog-post.2.md";
import post3 from "./blog-post.3.md";

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
  container: {
    marginTop: "20px",
    marginBottom: "30px",
  }
}));

const mainFeaturedPost = {
  title: "Title of a longer featured blog post",
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: "https://source.unsplash.com/random",
  imgText: "main image description",
  linkText: "Continue reading…",
};

const featuredPosts = [
  {
    title: "Featured post",
    date: "Nov 12",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    image: "https://source.unsplash.com/random",
    imageText: "Image Text",
  },
  {
    title: "Post title",
    date: "Nov 11",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    image: "https://source.unsplash.com/random",
    imageText: "Image Text",
  },
];

// const posts = [];
const posts = [post1, post2, post3];

const sidebar = {
  // title: "About",
  description:
    "Anda belum dapat mendaftar event ini. Yuk buat akun sekarang agar bisa mendaftar di event ini dan juga event - event lainnya.",

  desc2: "Daftar sekarang untuk dapat mengikuti event ini",

  // archives: [
  //   { title: "March 2020", url: "#" },
  //   { title: "February 2020", url: "#" },
  //   { title: "January 2020", url: "#" },
  //   { title: "November 1999", url: "#" },
  //   { title: "October 1999", url: "#" },
  //   { title: "September 1999", url: "#" },
  //   { title: "August 1999", url: "#" },
  //   { title: "July 1999", url: "#" },
  //   { title: "June 1999", url: "#" },
  //   { title: "May 1999", url: "#" },
  //   { title: "April 1999", url: "#" },
  // ],
  // social: [
  //   { name: "GitHub", icon: GitHubIcon },
  //   { name: "Twitter", icon: TwitterIcon },
  //   { name: "Facebook", icon: FacebookIcon },
  // ],
};

export default function Blog() {
  const classes = useStyles();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg" className={classes.container} >
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4} style={{marginTop:"30px"}}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} className={classes.mainGrid}>
            <Main title="Description Event" posts={posts} />
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              desc2={sidebar.desc2}
              archives={sidebar.archives}
              social={sidebar.social}
              style={{ position: "fixed", justifyContent: 'center' }}
            />
          </Grid>
        </main>
      </Container>
    </React.Fragment>
  );
}
