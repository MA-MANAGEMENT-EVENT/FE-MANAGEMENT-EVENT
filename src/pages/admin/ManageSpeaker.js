import React from "react";
import { DataGrid } from "@mui/x-data-grid";
// import { DataGridPro } from "@mui/x-data-grid-pro";
import Container from "@material-ui/core/Container";
import Typography from "../../atoms/typography/Typhography";
import TextField from "../../atoms/textfield/TextField";
import { makeStyles} from "@material-ui/core/styles";
import Button from "../../atoms/button/Button";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { FormControlLabel, IconButton } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from '@material-ui/icons/Delete';
import { blue } from "@material-ui/core/colors";

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
  columns:{
    font:"#0C539F80",
  }
}));

const MatEdit = ({ index }) => {
    const handleEditClick = () => {

    };  
    return (
      <FormControlLabel
        control={
          <IconButton>
            <EditIcon style={{ color: blue[500] }} onClick={handleEditClick} />
          </IconButton>
        }
      />
    );
  };

const MatDel = ({ index }) => {
    const handleDeleteClick = () => {   

    };  
    return (
      <FormControlLabel
        control={
          <IconButton
            color="secondary"
          >
            <DeleteIcon onClick={handleDeleteClick} />
          </IconButton>
        }
      />
    );
  };
  
const columns = [
  { field: "speaker", headerName: "Speaker Name", width: "200" },
  { field: "image", headerName: "Image", width: "150" },
  { field: "deskripsi", headerName: "Deskripsi", width: "600" },
  { field: "actions", headerName: "Update",
    sortable: false,
    width: 80,
    disableClickEventBubbling: true,
    renderCell: (params) => {
    return (
      <div
        className="d-flex justify-content-between align-items-center"
        style={{ cursor: "pointer" }}
      >
        <MatEdit index={params.row.id} />
      </div>
    );
  }
},
  { field: "action", headerName: "Delete",
    sortable: false,
    width: 80,
    disableClickEventBubbling: true,
    renderCell: (params) => {
    return (
    <div
        className="d-flex justify-content-between align-items-center"
        style={{ cursor: "pointer" }}
    >
        <MatDel index={params.row.id} />
    </div>
    );
    }
    }
];

const rows = [
  {
    id: 1,
    speaker: "Robert Lewandowski",
    image :"0000000124.jpg",
    deskripsi :"Pemain sepak bola Polandia"
  },
  {
    id: 2,
    speaker: "Susi Susanti",
    image :"0000000124.jpg",
    deskripsi :"Robert Lewandowski adalah pemain sepak bola Polandia yang bermain sebagai penyerang pada klub Bundesliga Jerman, Bayern Munich dan merupakan kapten tim nasional Polandia",

  },
  {
    id: 3,
    speaker: "Lannister",
    image :"0000000124.jpg",
    deskripsi :"Pemain sepak bola Polandia"
  },
  { id: 4, 
    speaker: "Lee Sinisuka Sanjaya", 
    image :"0000000124.jpg",
    deskripsi :"Pemain sepak bola Polandia"
  },  
  {
    id: 5,
    speaker: "Kevin Sinisuka Rahayu",
    image :"0000000124.jpg",
    deskripsi :"Pemain sepak bola Polandia"
  },
  {
    id: 6,
    speaker: "Melisandre",
    image :"0000000124.jpg",
    deskripsi :"Pemain sepak bola Polandia"
  },
  {
    id: 7,
    speaker: "Apriyani Sanjaya",
    image :"0000000124.jpg",
    deskripsi :"Pemain sepak bola Polandia"
  },
  {
    id: 8,
    speaker: "Robert Lewandowski",
    image :"0000000124.jpg",
    deskripsi :"Pemain sepak bola Polandia"
  },
  {
    id: 9,
    speaker: "Ratna Sari",
    image :"0000000124.jpg",
    deskripsi :"Pemain sepak bola Polandia"
  },
  {
    id: 10,
    speaker: "Riduan Kamil",
    image :"0000000124.jpg",
    deskripsi :"Pemain sepak bola Polandia"
  },
];

export default function ManageSpeaker() { 
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  return (
    <>
      <div className={classes.heroContent} style={{ marginTop: 5 }}>
        <Container maxWidth="sm">
          <Typography
            variant="h4"
            align="center"
            color="textPrimary"
            gutterBottom
            text="Data Speaker"
          />
        </Container>
      </div>

      {/* Add New Speaker */}
      <div
        style={{
          height:70,
        }}
      >
      <Button
        // className="add"
        text="Add Speaker"
        onClick={handleOpen}
        // startIcon={<AddIcon/>}
         />
       <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add New Speaker</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Nama Speaker"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Description"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label=""
            type="file"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button 
            onClick={handleClose}
            // startIcon={<CloseIcon />}
            color="secondary"
            text="Cancel"
          />
          <Button 
          onClick={handleClose} 
          text="Submit"
          />
        </DialogActions>
      </Dialog>

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
    </>
  );
}

