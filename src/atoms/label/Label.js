import FormLbl from "@material-ui/core/FormLabel";
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
  footerLabel: {
    fontSize: "15px", 
    fontWeight: "bold", 
    color: "white",
  },
  title: {
    display: "block",
    marginBottom: "10px",
    fontSize: "20px",
    color: "white",
    fontWeight: "bold",
    marginTop: "20px",
    background:"#3f51b5",
    paddingLeft:30,
    paddingTop:10,
    paddingBottom:10,
  
    borderBottomRightRadius:100,
    borderTopLeftRadius:100,
    width:500,
  },
  question:{
    display: "block",
    marginBottom: "10px",
    marginTop: "10px",
    fontSize: "15px",
    color: "black",
    fontWeight: "bold",
  }
});


const FormLabel = ({className, text}) => {

  const classes = useStyles();
  return <FormLbl className={classes[className]}>{text}</FormLbl>;
};
FormLabel.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
};

FormLabel.defaultProps= {
  className: "question",
  text: "",
};
export default FormLabel;
