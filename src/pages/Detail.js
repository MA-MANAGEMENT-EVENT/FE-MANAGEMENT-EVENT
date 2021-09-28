import React from 'react'
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    icon: {
      marginRight: theme.spacing(2),
    },
    heroContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
      marginTop: theme.spacing(4),
    },
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    card: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
    },
    cardMedia: {
      paddingTop: "56.25%", 
    },
    cardContent: {
      flexGrow: 1,
    },
  
  
  }));
const DetailEvent = () => {
    const classes = useStyles();    
    <> 
    <div className={classes.heroContent} style={{ marginTop: 10 }}>
    <Container>

    </Container>
    </div>
    </>
}

export default DetailEvent