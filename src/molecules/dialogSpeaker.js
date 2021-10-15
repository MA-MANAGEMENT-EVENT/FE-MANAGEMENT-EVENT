import React, { useState } from "react";
import Button from "../atoms/button/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { TextField } from "@material-ui/core";

export default function FormDialog({
  open,
  handleClose,
  data,
  onChange,
  handleFormSubmit,
} = {}) {
  const { id = null, description, image, name } = data;
  const [loading] = useState([]);

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle id="alert-dialog-title">
          {id ? "Update speaker" : "Create new speaker"}
        </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Nama Speaker"
            type="text"
            value={name}
            fullWidth
            variant="standard"
            onChange={(e) => onChange(e)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="description"
            value={description}
            label="Description"
            type="text"
            fullWidth
            variant="standard"
            onChange={(e) => onChange(e)}
          />
          {id && image && <a href={image}>{image}</a>}
          <TextField
            autoFocus
            margin="dense"
            id="image"
            label=""
            type="file"
            fullWidth
            variant="standard"
            onChange={(e) => onChange(e)}
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            style={{ background: "#D1514A" }}
            text="Cancel"
          />
          <Button
            text="Submit"
            onClick={() => handleFormSubmit(id)}
            style={{ backgroundColor: "#3f50b5" }}
          >
            {id ? "Update" : "Submit"}
            {loading ? "Loading..." : "OK"}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
