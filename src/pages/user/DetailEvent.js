import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "../../atoms/grid/index";
import Container from "@material-ui/core/Container";
import DetailHeader from "../../organisms/Detail/DetailHeader";
import Main from "../../organisms/Detail/Description";
import Sidebar from "../../organisms/Detail/Sidebar";
import axios from "axios";
import { useParams } from "react-router-dom";
import Axios from "axios";
import Swal from "sweetalert2";
import Loading from "react-loading-animation";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
  container: {
    marginTop: "20px",
    marginBottom: "30px",
  },
}));

// const detailHeader = {
//   title: "Preparing your IT to meet the demands of the hybrid workforce",
//   image: "https://source.unsplash.com/random",
//   imgText: "main image description",
//   location: "Online",
//   time: "Thursday, 30 September 2021 09.00 AM",
//   speaker: "Ken Wheeler",
// };

const sidebar = {
  description: `Anda belum dapat mendaftar event ini. 
                Yuk buat akun sekarang agar bisa mendaftar 
                di event ini dan juga event - event lainnya.`,

  desc2: "Daftar sekarang untuk dapat mengikuti event ini",
};

export default function DetailEvent() {
  let { id } = useParams();
  const [event, setEvent] = useState(null);
  const [user] = useContext(UserContext);
  const classes = useStyles();
  let history = useHistory();

  useEffect(() => {
    window.scrollTo(0, 0);
    if (event === null) {
      axios.get(`event/${id}`).then((res) => {
        setEvent(res.data);
      });
    }
  });
  const onSubmit = () => {
    Axios.post(`event-registration/register`, {
      eventId: id,
      userId: user.id,
    }).then((res) => {
      if (res.status === 200) {
        Swal.fire("Success", "Registration Success ", "success");
      } else {
        Swal.fire("Error", "Registration Failed", "error");
      }
    }).catch((err)=>{
      Swal.fire("Error", `${err.response.data.message}`, "error");
    });
  };
  const managePeserta = () => {
    history.push(`/manageparticipantandfeedback/${id}`);
  };
  return (
    <>
      {event === null && (
        <div style={{ marginTop: 200 }}>
          <Loading />
        </div>
      )}
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
                speaker={event.speaker.map((speaker) => speaker.name).join(", ")}
              />
              <Grid container spacing={5} className={classes.mainGrid}>
                <Main title={event.name} description={event.description} />
                <Sidebar
                  description={sidebar.description}
                  desc2={sidebar.desc2}
                  speaker={event.speaker}
                    // .map((speaker) => speaker.name)
                    // .join(",")}
                  location={event.location.platform.name}
                  time={`${event.startDate} ${event.endDate}`}
                  style={{ position: "fixed", justifyContent: "center" }}
                  onSubmit={onSubmit}
                  onMove={managePeserta}
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
