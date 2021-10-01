import React from 'react'
import Container from "@material-ui/core/Container";
import Typography from "../../atoms/typography/Typhography";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from '@mui/system'
import Button from "../../atoms/button/Button";
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import EventNoteOutlinedIcon from '@mui/icons-material/EventNoteOutlined';

const message = `Truncation should be conditionally applicable on this long line of text
 as this is a much longer line than what the container can support. `;
const useStyles = makeStyles((theme) => ({
    heroContent: {
      padding: theme.spacing(8, 0, 6),
      marginTop:20,
    },
      item:{...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    },
  }));

  const history = [
    {
    id:1,
    name :"Belajar Kotlin to Build Android App",
    },
    {
    id:2,
    name :"How to Start Javascipt to build",
    },
    {
    id:3,
    name :"Belajar Kotlin to Build Android App",
    },
    {
    id:4,
    name :"Belajar Kotlin to Build Android App",
    }
]

const countHistory = history.filter(item => item.id).length;

const History = () => {
    const classes = useStyles();
    return(<>
    <div className={classes.heroContent} style={{ marginTop: 10 }}>
        <Container maxWidth="sm">
          <Typography
            variant="h4"
            align="center"
            color="textPrimary"
            gutterBottom
            text="My History Events"
          />
          <div>
            <Box display="flex" flexDirection="column" justifyContent="center" padding={1}
            sx={{
                bgcolor: '#F2ECFF',
                width:200,
                height:50,
                marginLeft:20,
              }}
            ><h4 sx={{marginLeft:20, marginTop:10}}> I have {countHistory} Attended  Events</h4>
            </Box>
          </div>
        </Container>
      </div>
      
      {/* coba3 */}
      <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 3 }}>
      <Paper sx={{ maxWidth: 400, my: 1, mx: 'auto', p: 2 }}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <EventNoteOutlinedIcon />
          </Grid>
          <Grid item xs zeroMinWidth>
          <Typography
            align="left"
            color="textSecondary"
            text="Never Stop Learning, Because Life Never Stops Teaching."
            paragraph
          />
          </Grid>
          <Grid item>
          <Button size="small" color="primary" text="Feedback" />
          </Grid>
        </Grid>
      </Paper>
    </Box>
  
</>)
}

export default History