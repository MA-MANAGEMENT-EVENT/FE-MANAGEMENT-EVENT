import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Container from "@material-ui/core/Container";
import Typography from "../../atoms/typography/Typhography";
import { makeStyles } from "@material-ui/core/styles";
import Button from "../../atoms/button/Button";
import { Grid, FormControlLabel, IconButton } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { blue } from "@material-ui/core/colors";
import FormDialog from "../../molecules/dialogSpeaker";
import Loading from "react-loading-animation";
import Axios from "axios";
import axios from "axios";

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
  columns: {
    font: "#0C539F80",
  },
}));

const initialValue = { name: "", description: "", image: "", newimage: "" };

export default function ManageSpeaker() {
  const baseURL = "https://management-event-api.herokuapp.com/speaker";
  const columns = [
    { field: "name", headerName: "Speaker Name", width: "200" },
    { field: "image", headerName: "Image", width: "150" },
    { field: "description", headerName: "Deskripsi", width: "590" },
    {
      width: "200",
      field: "id",
      headerName: "Action",
      sortable: false,
      renderCell: (params) => {
        return (
          <div
            className="d-flex justify-content-between align-items-center"
            style={{ cursor: "pointer" }}
          >
            <Button
              style={{ background: "#f0ad4e", marginRight: 10 }}
              variant="contained"
              color="primary"
              onClick={() => handleUpdate(params.row)}
              text="Edit"
            />
            <Button
              style={{ background: "#FF2060" }}
              variant="contained"
              color="secondary"
              onClick={() => handleDelete(params.row.id)}
              text="Delete"
            />
          </div>
        );
      },
    },
  ];
  useEffect(() => {
    getUsers();
  }, []);

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [formData, setFormData] = useState(initialValue);
  const [status, setStatus] = useState("create");

  //Read Speaker
  const [tableData, setTableData] = useState(null);

  useEffect(() => {
    fetch(baseURL)
      .then((data) => data.json())
      .then((data) => setTableData(data));
  });
  const handleClose = () => {
    setOpen(false);
    setFormData(initialValue);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  const getUsers = () => {
    fetch(baseURL)
      .then((resp) => resp.json())
      .then((resp) => setTableData(resp));
  };
  const onChange = (e) => {
    const { value, id } = e.target;
    switch (id) {
      case "name": {
        setFormData({ ...formData, name: value });
        break;
      }
      case "description": {
        setFormData({ ...formData, description: value });
        break;
      }
      case "image": {
        setFormData({ ...formData, newimage: e.target.files[0] });
        break;
      }
      default: {
        break;
      }
    }
  };

  const handleUpdate = (oldData) => {
    setFormData(oldData);
  }

  // const handleUpdate = (data) => {
  //   setFormData(data);
  //   handleClickOpen();
  // };

  const handleDelete = (id) => {
    const confirm = window.confirm(
      "Are you sure, you want to delete this Speaker?",
      id
    );
    if (confirm) {
      fetch(baseURL + `/${id}`, { method: "DELETE" })
        .then((resp) => resp.json())
        .then((resp) => getUsers());
    }
  };

  const handleFormSubmit = (id) => {
    console.log(id);
    let url = null;
    const Data = new FormData();
    Data.set("image", formData.newimage);
    if (id === null) {
      Axios.post(
        "https://api.imgbb.com/1/upload?key=b58ff410c6b72c5c9584e782b1830cda",
        Data
      )
        .then((res) => {
          url = res.data.data.url;
        })
        .then((res) => {
          console.log(url);
          console.log(formData.description);
          console.log(formData.name);
          axios
            .post("speaker", {
              description: formData.description,
              image: url,
              name: formData.name,
            })
            .then((res) => {
              console.log(res);
              setFormData(initialValue);
              handleClose();
            });
        });
    } else if (id !== null) {
      Axios.post(
        "https://api.imgbb.com/1/upload?key=b58ff410c6b72c5c9584e782b1830cda",
        Data
      )
        .then((res) => {
          url = res.data.data.url;
        })
        .then((res) => {
          console.log(url);
          console.log(formData.description);
          console.log(formData.name);
          axios
            .put(`speaker/${id}`, {
              description: formData.description,
              image: url,
              name: formData.name,
            })
            .then((res) => {
              console.log(res);
              setFormData(initialValue);
              handleClose();
            });
        });
    }
  };

  return (
    <>
      {tableData === null && (
        <div style={{ marginTop: 200 }}>
          <Loading />
        </div>
      )}
      {tableData && (
        <>
          <div className={classes.heroContent} style={{ marginTop: 5 }}>
            <Container maxWidth="sm">
              <Typography
                variant="h4"
                align="center"
                color="textPrimary"
                gutterBottom
                text="Manage Speaker"
              />
            </Container>
          </div>
          {/* Add New Speaker */}
          <div
            style={{
              height: 70,
            }}
          >
            <Grid align="right">
              <Button
                text="Add Speaker"
                onClick={handleClickOpen}
                style={{ backgroundColor: "#3f50b5" }}
              />
            </Grid>
          </div>
          <div
            style={{
              height: 400,
              width: "100%",
            }}
          >
            <DataGrid
              rows={tableData}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[10]}
              disableSelectionOnClick
            />
          </div>
          <FormDialog
            open={open}
            handleClose={handleClose}
            data={formData}
            onChange={onChange}
            handleFormSubmit={handleFormSubmit}
          />
        </>
      )}
    </>
  );
}
