import * as React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Typography from "../../atoms/typography/Typhography";
import Button from "../../atoms/button/Button";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

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
}));

const columns = [
  { field: "event", headerName: "Event Name", width: "400" },
  { field: "participant", headerName: "Participant Name", width: "350" },
  {
    field: "button",
    headerName: "Actions",
    width: "350",
    align: "center",
    renderCell: (params) => (
      <Button
        datatest="actions"
        size="small"
        text="Show"
        type="submit"
        style={{ marginTop: 1 }}
      />
    ),
  },
];

const rows = [
  {
    id: 1,
    event: "Test Event",
    participant: "Snow",
    email: "Jon@mail.com",
  },
  {
    id: 2,
    event: "Test Event",
    participant: "Lannister",
    email: "Cersei@mail.com",
  },
  {
    id: 3,
    event: "Test Event",
    participant: "Lannister",
    email: "Jaime@mail.com",
  },
  { id: 4, event: "Test Event", participant: "Stark", email: "Arya@mail.com" },
  {
    id: 5,
    event: "Welcoming Party",
    participant: "Targaryen",
    email: "Daenerys@mail.com",
  },
  {
    id: 6,
    event: "Welcoming Party",
    participant: "Melisandre",
    email: "Meli@mail.com",
  },
  {
    id: 7,
    event: "Welcoming Party",
    participant: "Clifford",
    email: "Ferrara@mail.com",
  },
  {
    id: 8,
    event: "Welcoming Party",
    participant: "Frances",
    email: "Rossini@mail.com",
  },
  {
    id: 9,
    event: "Welcoming Party",
    participant: "Roxie",
    email: "Harvey@mail.com",
  },
];

export default function ManageFeedback() {
  const classes = useStyles();
  return (
    <>
    
      <div className={classes.heroContent} style={{ marginTop: 5 }}>
        <Container maxWidth="sm">
          <Typography
            variant="h4"
            align="center"
            color="textPrimary"
            gutterBottom
            text="Manage Event Feedback"
          />
        </Container>
      </div>
      <div align="right" style={{ marginBottom: 10 }}>
        <Button datatest="new" text="New" type="submit" />
      </div>
      <div
        style={{
          height: 400,
          width: "100%",
        }}
      >
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          //   rowsPerPageOptions={[10]}
          disableSelectionOnClick
          //   autoHeight
          //   components={{
          //     Toolbar: GridToolbar,
          //   }}
        />
      </div>
      
    </>
  );
}
