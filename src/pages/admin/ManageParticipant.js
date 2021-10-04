// import * as React from "react";
// import Container from "@material-ui/core/Container";
// import Typography from "../../atoms/typography/Typhography";
// import { makeStyles } from "@material-ui/core/styles";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
// import Button from "../../atoms/button/Button";

// const useStyles = makeStyles((theme) => ({
//   heroContent: {
//     padding: theme.spacing(8, 0, 6),
//     marginTop: 20,
//   },
//   item: {
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: "center",
//     color: theme.palette.text.secondary,
//   },
// }));

// function createData(event, participant, email) {
//   return { event, participant, email };
// }

// const rows = [
//   createData("Ice cream sandwich", "George", "george@mail.com"),
//   createData("Eclair", "Brian", "brian@mail.com"),
//   createData("Cupcake", "Kyle", "kyle@mail.com"),
//   createData("Frozen yoghurt", "Daniel", "daniel@mail.com"),
//   createData("Gingerbread", "Emily", "emily@mail.com"),
// ];

// export default function BasicTable() {
//   const classes = useStyles();
//   return (
//     <>
//       <div className={classes.heroContent} style={{ marginTop: 5}}>
//         <Container maxWidth="sm">
//           <Typography
//             variant="h4"
//             align="center"
//             color="textPrimary"
//             gutterBottom
//             text="Manage Event Participant"
//           />
//         </Container>
//       </div>
//       <TableContainer component={Paper}>
//         <Table sx={{ minWidth: 650 }} aria-label="simple table">
//           <TableHead>
//             <TableRow >
//               <TableCell>Event Name</TableCell>
//               <TableCell>Participant Name</TableCell>
//               <TableCell>Email</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {rows.map((row) => (
//               <TableRow
//                 key={row.event}
//                 sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
//               >
//                 <TableCell component="th" scope="row">
//                   {row.event}
//                 </TableCell>
//                 <TableCell>{row.participant}</TableCell>
//                 <TableCell>{row.email}</TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//       <div align="right" style={{marginTop:10}}>
//       <Button datatest="export" text="export" type="submit" /></div>
//     </>
//   );
// }

import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
// import { DataGridPro } from "@mui/x-data-grid-pro";
import Container from "@material-ui/core/Container";
import Typography from "../../atoms/typography/Typhography";
import { makeStyles } from "@material-ui/core/styles";
import Button from "../../atoms/button/Button";

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
  { field: "email", headerName: "Email", width: "350" }
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

export default function DataTable() {
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
            text="Manage Event Participant"
          />
        </Container>
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
          rowsPerPageOptions={[10]}
          disableSelectionOnClick
        />
      </div>
      <div align="right" style={{ marginTop: 10 }}>
        <Button datatest="export" text="export" type="submit" />
      </div>
    </>
  );
}
