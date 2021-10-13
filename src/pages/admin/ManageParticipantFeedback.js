import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Typography from "../../atoms/typography/Typhography";
import Button from "../../atoms/button/Button";
import { DataGrid } from "@mui/x-data-grid";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import DownloadIcon from "@mui/icons-material/Download";
import Axios from "axios";
import { useParams } from "react-router-dom";
import { EventContext } from "../../context/EventContext";
import Loading from "react-loading-animation";
import Swal from "sweetalert2";

const useStyles = makeStyles((theme) => ({
  heroContent: {
    padding: theme.spacing(8, 0, 6),
    marginTop: 20,
  },
  item: {
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  container: {
    marginTop: "20px",
    marginBottom: "30px",
  },
}));

const columns = [
  { field: "id", headerName: "ID", width: "150" },
  { field: "name", headerName: "Participant Name", width: "200" },
  { field: "email", headerName: "Email", width: "300" },
  { field: "job", headerName: "Job", width: "150" },
  { field: "feedback1", headerName: "Feedback 1", width: "200" },
  { field: "feedback2", headerName: "Feedback 2", width: "200" },
  { field: "feedback3", headerName: "Feedback 3", width: "200" },
  { field: "feedback4", headerName: "Feedback 4", width: "200" },
];

export default function ManageParticipant() {
  let { id } = useParams();
  let [participant, setParticipant] = useState(null);
  const [dataEvents, setStatusForm] = useContext(EventContext);

  // console.log(event.id)

  // console.log(`${id}`)

  useEffect(() => {
    window.scrollTo(0, 0)
    if (participant === null) {
      // const token = localStorage.getItem("token");
      // const Id = localStorage.getItem("Id");
      // dataEvents.map((event) =>
      Axios({
        method: "get",
        url: `event-registration/event/${id}`,
      }).then((res) => {
        console.log(res);

        const rows = res.data.map((data) => {
          return (
            // console.log(data.participant),
            {
              id: `${data.participant.id}`,
              name: `${data.participant.name}`,
              email: `${data.participant.email}`,
              job: `${data.participant.job}`,
              feedback1: `${data.feedback[0].answer}`,
              feedback2: `${data.feedback[1].answer}`,
              feedback3: `${data.feedback[2].answer}`,
              feedback4: `${data.feedback[3].answer}`,
            }
          );
        });
        setParticipant(rows);
      });
      // );
    }
  });

  console.log(participant);

  const exportData = () => {
    Axios({
      method: "get",
      url: `event-registration/export/excel/${id}`,
      responseType: "blob",
    }).then((res) => {
      console.log(res);
      const url = window.URL.createObjectURL(new Blob([res.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "participant.xlsx");
      document.body.appendChild(link);
      link.click();
      if (res.status === 200) {
        Swal.fire("Success", "Export Participant Success ", "success");
      }
    });

    // .then((res) => {
    //   console.log(res);
    // });
  };

  const classes = useStyles();
  return (
    <>
      {participant === null && (
        <div style={{ marginTop: 200 }}>
          <Loading />
        </div>
      )}
      {participant && (
        <Container>
          <div>
            <div className={classes.heroContent} style={{ marginTop: 5 }}>
              <Container maxWidth="sm">
                <Typography
                  variant="h4"
                  align="center"
                  color="textPrimary"
                  gutterBottom
                  text="Manage Participant"
                />
              </Container>
            </div>
            <div align="right">
              <Link to="/question" style={{ textDecoration: "none" }}>
                <Button
                  datatest="question"
                  text="Feedback Question"
                  type="submit"
                  style={{ margin: 20, backgroundColor: "#3f50b5" }}
                  onClick={() => {}}
                />
              </Link>
              <Button
                datatest="export"
                startIcon={<DownloadIcon />}
                text="Export Participant"
                color="warning"
                onClick={() => exportData()}
              />
            </div>
            <div
              style={{
                height: 400,
                width: "100%",
                marginBottom: 50,
              }}
            >
              <DataGrid
                rows={participant}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[10]}
                disableSelectionOnClick
              />
            </div>
          </div>
        </Container>
      )}
    </>
  );
}
