import TxtArea from "@material-ui/core/TextareaAutosize";
import PropTypes from 'prop-types';
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  root: {
    width: "500px",
    marginTop: "10px",
  },
});
const TextArea = ({minRows,placeholder,name,onChange,value,...props}) => {
  const classes = useStyles();
  return (
    <TxtArea
      className={classes.root}
      minRows={minRows}
      placeholder={placeholder}
      name={name}
      onChange={onChange}
      value={value}
      {...props}
    />
  );
};
TextArea.propTypes = {
  className:PropTypes.string,
  minRows:PropTypes.number,
  placeholder: PropTypes.string,
  name:PropTypes.string,
  onChange:PropTypes.func,
  value:PropTypes.string,
};

TextArea.defaultProps= {
  className:"",
  minRows: 8,
  placeholder:"",
  name:"",
  onChange:undefined,
  value:undefined,
};
export default TextArea;
