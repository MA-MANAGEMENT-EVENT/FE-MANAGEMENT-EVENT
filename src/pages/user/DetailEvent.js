import React, { useEffect, useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "../../atoms/grid/index";
import Container from "@material-ui/core/Container";
import DetailHeader from "../../organisms/Detail/DetailHeader";
import Main from "../../organisms/Detail/Description";
import Sidebar from "../../organisms/Detail/Sidebar";
import axios from "axios";
import { useParams } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
  container: {
    marginTop: "20px",
    marginBottom: "30px",
  },
}));

const detailHeader = {
  title: "Preparing your IT to meet the demands of the hybrid workforce",
  image: "https://source.unsplash.com/random",
  imgText: "main image description",
  location: "Online",
  time: "Thursday, 30 September 2021 09.00 AM",
  speaker: "Ken Wheeler",
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
  description: `Anda belum dapat mendaftar event ini. Yuk buat akun sekarang agar bisa mendaftar 
    di event ini dan juga event - event lainnya.`,

  desc2: "Daftar sekarang untuk dapat mengikuti event ini",
};

export default function DetailEvent() {
  let { id } = useParams();
  const [event, setEvent] = useState(null);
  const classes = useStyles();

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);
  useEffect(() => {
    if (event === null) {
      axios.get(`event/${id}`).then((res) => {
        console.log(res);
        setEvent(res.data);
      });
    }
  });
  return (
    <>
      {event && (
        <React.Fragment>
          <CssBaseline />
          <Container maxWidth="lg" className={classes.container}>
            <main>
              <DetailHeader
                title={event.name}
                image="https://source.unsplash.com/random"
                imgText="main image description"
                location={event.location.platform.name}
                time={`${event.openRegistration} - ${event.closeRegistration}`}
                speaker={event.speaker.map(speaker=>speaker.name).join(",")}
              />
              <Grid container spacing={5} className={classes.mainGrid}>
                <Main
                  title={event.name}
                  description={event.description}
                  
                />
                <Sidebar
                  description={sidebar.description}
                  desc2={sidebar.desc2}
                  speaker={event.speaker.map(speaker=>speaker.name).join(",")}
                  location={event.location.platform.name}
                  time={`${event.startDate} - ${event.endDate}`}
                  style={{ position: "fixed", justifyContent: "center" }}
                  onSubmit={onSubmit()}
                />
                <div style={{ margin: 10 }}></div>
              </Grid>
            </main>
          </Container>
        </React.Fragment>
      )}
    </>
  );
}
