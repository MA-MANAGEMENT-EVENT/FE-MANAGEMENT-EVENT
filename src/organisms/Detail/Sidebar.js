import React, { useContext } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "../../atoms/button/Button";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import RoomOutlinedIcon from "@mui/icons-material/RoomOutlined";
import EventAvailableSharpIcon from "@mui/icons-material/EventAvailableSharp";
import { UserContext } from "../../context/UserContext";
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
  const [user] = useContext(UserContext);
  const classes = useStyles();
  const {
    description,
    desc2,
    speaker,
    location,
    time,
    onSubmit,
    onMove,
  } = props;

  return (
    <Grid item xs={12} md={4}>
      {user.role === "guest" && (
        <Paper elevation={0} className={classes.sidebarAboutBox}>
          <Typography variant="h6" gutterBottom></Typography>
          <Typography>{description}</Typography>
        </Paper>
      )}
      <Grid item xs={12} style={{ marginTop: 30.0, marginBottom: 15 }}>
        <Typography
          style={{ fontSize: 20, fontStretch: "ultra-expanded", marginTop: 30 }}
        >
          <b>Speaker</b>
        </Typography>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: 10.0,
            marginTop: 10.0,
          }}
        >
          <PersonOutlineOutlinedIcon color="action" />
          <Typography
            style={{
              fontSize: 20,
              marginLeft: 20,
              fontStretch: "ultra-expanded",
            }}
          >
            {speaker.map((data)=>{
              return(
                <div>
                <span>{data.name}</span>
                </div>
              )
            })}
          </Typography>
        </div>

        <Typography
          style={{ fontSize: 18, fontStretch: "ultra-expanded", marginTop: 30 }}
        >
          <b>Location</b>
        </Typography>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: 10.0,
            marginTop: 10.0,
          }}
        >
          <RoomOutlinedIcon color="action" />
          <Typography
            style={{
              fontSize: 20,
              marginLeft: 20,
              fontStretch: "ultra-expanded",
            }}
          >
            {location}
          </Typography>
        </div>

        <Typography
          style={{ fontSize: 18, fontStretch: "ultra-expanded", marginTop: 30 }}
        >
          <b>Tanggal Pelaksanaan</b>
        </Typography>
        <div style={{ display: "flex", marginBottom: 10.0, marginTop: 10.0 }}>
          <EventAvailableSharpIcon color="action" style={{ marginTop: 3 }} />
          <Typography
            style={{
              fontSize: 20,
              marginLeft: 20,
              fontStretch: "ultra-expanded",
            }}
          >
            {time}
          </Typography>
        </div>
      </Grid>

      <div style={{ borderTop: "1px gainsboro solid", marginBottom: 5 }}>
        {user.role === "ROLE_USER" && (
          <Typography
            style={{
              fontSize: 20.0,
              marginTop: 30,
              marginBottom: 15.0,
              textAlign: "center",
              fontStretch: "ultra-expanded",
            }}
          >
            {desc2}
          </Typography>
        )}
        {user.role === "ROLE_USER" && (
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            text="Daftar Sekarang"
            size="large"
            style={{
              fontSize: 18,
              fontWeight: "700",
              borderRadius: "8px",
              backgroundColor: "#3f50b5",
            }}
            onClick={() => onSubmit()}
          />
        )}
        {user.role === "ROLE_ADMIN" && (
          <Button
            size="large"
            text="Manage Participant and Feedback"
            // color="secondary"
            style={{
              backgroundColor: "#3f50b5",
            }}
            onClick={() => onMove()}
          />
        )}
      </div>
    </Grid>
  );
}

Sidebar.propTypes = {
  archives: PropTypes.array,
  description: PropTypes.string,
  social: PropTypes.array,
  title: PropTypes.string,
};
