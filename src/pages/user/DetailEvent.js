import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import DetailHeader from "../../organisms/Detail/DetailHeader";
import Main from "../../organisms/Detail/Description";
import Sidebar from "../../organisms/Detail/Sidebar";

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
  container: {
    marginTop: "20px",
    marginBottom: "30px",
  }
}));

const detailHeader = {
  title: "Preparing your IT to meet the demands of the hybrid workforce",
  image: "https://source.unsplash.com/random",
  imgText: "main image description",
  location: "Online",
  time: "Thursday, 30 September 2021 09.00 AM",
  speaker: "Ken Wheeler"
};

const posts = {
  description: `There are many variations of passages of Lorem Ipsum available, 
  but the majority have suffered alteration in some form, by injected humour, 
  or randomised words which don't look even slightly believable. If you are going 
  to use a passage of Lorem Ipsum, you need to be sure there isn't anything 
  embarrassing hidden in the middle of text. All the Lorem Ipsum generators on 
  the Internet tend to repeat predefined chunks as necessary, making this the first 
  true generator on the Internet. It uses a dictionary of over 200 Latin words, 
  combined with a handful of model sentence structures, to generate Lorem Ipsum 
  which looks reasonable. The generated Lorem Ipsum is therefore always free from 
  repetition, injected humour, or non-characteristic words etc.`,
};

const sidebar = {
  description:
    `Anda belum dapat mendaftar event ini. Yuk buat akun sekarang agar bisa mendaftar 
    di event ini dan juga event - event lainnya.`,

  desc2: "Daftar sekarang untuk dapat mengikuti event ini",
};

export default function DetailEvent() {
  const classes = useStyles();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg" className={classes.container} >
        <main>
          <DetailHeader post={detailHeader} />
          <Grid container spacing={5} className={classes.mainGrid}>
            <Main title={detailHeader.title} posts={posts} post={detailHeader} />  
            <Sidebar
              description={sidebar.description}
              desc2={sidebar.desc2}
              speaker={detailHeader.speaker}
              location={detailHeader.location}
              time={detailHeader.time}
              style={{ position: "fixed", justifyContent: 'center' }}
            />
            <div style={{margin:10}}></div>
          </Grid>
        </main>
      </Container>
    </React.Fragment>
  );
}
