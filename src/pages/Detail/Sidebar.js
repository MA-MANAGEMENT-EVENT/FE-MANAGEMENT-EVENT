import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "../../atoms/button/Button";
import RoomIcon from '@mui/icons-material/Room';
import EventAvailableSharpIcon from '@mui/icons-material/EventAvailableSharp';

const useStyles = makeStyles((theme) => ({
  
  sidebarAboutBox: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.grey[200],
    marginButtom: theme.spacing(2),
  },
  sidebarSection: {
    marginTop: theme.spacing(3),
  },
}));

export default function Sidebar(props) {
  const classes = useStyles();
  const { description, title, desc2 } = props;
  // const { archives, description, social, title, desc2 } = props;

  return (
    <Grid item xs={12} md={4}>
      <Paper elevation={0} className={classes.sidebarAboutBox} >
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography>{description}</Typography>
      </Paper>
      
      <Grid item xs={12}>
      <Typography style={{fontSize:20, fontStretch: "ultra-expanded"}}>Location</Typography>
      <RoomIcon style={{marginTop:10}} />
      <Typography style={{fontSize:20, marginTop:10, fontStretch: "ultra-expanded"}}>Tanggal Pelaksanaan</Typography>
      <EventAvailableSharpIcon style={{marginTop:10}} />
      </Grid>
      
      
      <Typography style={{fontSize:20.0, marginTop:10, paddingBottom: 10.0, fontStretch: "ultra-expanded"}}>{desc2}</Typography>
      {/* <Grid item xs={12}>
        <TextField
          variant="outlined"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
        />
      </Grid> */}
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
        text="Daftar Sekarang"
      />
    </Grid>
  );
}

Sidebar.propTypes = {
  archives: PropTypes.array,
  description: PropTypes.string,
  social: PropTypes.array,
  title: PropTypes.string,
};
