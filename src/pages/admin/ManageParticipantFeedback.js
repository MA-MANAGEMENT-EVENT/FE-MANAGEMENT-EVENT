import * as React from "react";
import { Link } from "react-router-dom";
import Typography from "../../atoms/typography/Typhography";
import Button from "../../atoms/button/Button";
import { DataGrid } from "@mui/x-data-grid";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import DownloadIcon from "@mui/icons-material/Download";

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
  { field: "participant", headerName: "Participant Name", width: "200" },
  { field: "email", headerName: "Email", width: "200" },
  { field: "job", headerName: "Job", width: "200" },
  { field: "feedback1", headerName: "Feedback 1", width: "200" },
  { field: "feedback2", headerName: "Feedback 2", width: "200" },
  { field: "feedback3", headerName: "Feedback 3", width: "200" },
];

const rows = [
  {
    id: 1,
    event: "Test Event",
    participant: "Snow",
    email: "Jon@mail.com",
    job: "Pelajar",
    feedback1: "Sudah",
    feedback2: "Baik",
    feedback3: "-",
  },
  {
    id: 2,
    event: "Test Event",
    participant: "Lannister",
    email: "Cersei@mail.com",
    job: "Pelajar",
    feedback1: "Oke",
    feedback2: "Baik",
    feedback3: "",
  },
  {
    id: 3,
    event: "Test Event",
    participant: "Lannister",
    email: "Jaime@mail.com",
    job: "Dosen",
    feedback1: "Baik",
    feedback2: "Humble",
    feedback3: "",
  },
  {
    id: 4,
    event: "Test Event",
    participant: "Stark",
    email: "Arya@mail.com",
    job: "Pelajar",
    feedback1: "Iya, sudah sesuai",
    feedback2: "",
    feedback3: "",
  },
  {
    id: 5,
    event: "Welcoming Party",
    participant: "Targaryen",
    email: "Daenerys@mail.com",
    job: "Pelajar",
    feedback1: "Tidak masalah",
    feedback2: "",
    feedback3: "",
  },
  {
    id: 6,
    event: "Welcoming Party",
    participant: "Melisandre",
    email: "Meli@mail.com",
    job: "Dosen",
    feedback1: "Materi presentasi sudah sesuai dengan ekspetasi",
    feedback2: "",
    feedback3: "",
  },
  {
    id: 7,
    event: "Welcoming Party",
    participant: "Clifford",
    email: "Ferrara@mail.com",
    job: "Pelajar",
    feedback1: "Materi sesuai ekspetasi",
    feedback2: "",
    feedback3: "",
  },
  {
    id: 8,
    event: "Welcoming Party",
    participant: "Frances",
    email: "Rossini@mail.com",
    job: "Pelajar",
    feedback1: "Baik",
    feedback2: "",
    feedback3: "",
  },
  {
    id: 9,
    event: "Welcoming Party",
    participant: "Roxie",
    email: "Harvey@mail.com",
    job: "Pelajar",
    feedback1: "Oke",
    feedback2: "",
    feedback3: "",
  },
];

export default function ManageParticipant() {
  const classes = useStyles();
  return (
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
          <Link to="/question" style={{ textDecoration: "none"}}>
            <Button
              datatest="question"
              text="Feedback Question"
              type="submit"
              style={{ margin: 20, backgroundColor: "#3f50b5", }}
              onClick={() => {}}
           
            />
          </Link>
          <Button
            datatest="export"
            startIcon={<DownloadIcon />}
            text="Export Participant"
            color="warning"
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
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[10]}
            disableSelectionOnClick
          />
        </div>
      </div>
    </Container>
  );
}