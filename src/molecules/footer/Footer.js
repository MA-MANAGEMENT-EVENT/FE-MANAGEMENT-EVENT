import Label from "../../atoms/label/Label";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "../../atoms/typography/Typhography"
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import "./style.css";
const Footer = (props) => {
  return (
    <footer data-testid={props.datatest}>
   
      <Grid container>
        <Grid item xs={4}>
        <Typography variant="h6" text="Metroevent" className="logofooter"/>
        </Grid>
        <Grid item xs={4}>
        </Grid>
        <Grid item xs={4}>
          <div style={{marginTop:8,float:"right",marginRight:30}}>
          <LinkedInIcon fontSize="large"/>
        <InstagramIcon fontSize="large"/>
        <FacebookIcon fontSize="large"/>
          </div>
       
        </Grid>
      </Grid>
    </footer>
  );
};
export default Footer;
