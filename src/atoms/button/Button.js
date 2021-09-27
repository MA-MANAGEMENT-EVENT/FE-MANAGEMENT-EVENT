import Btn from "@material-ui/core/Button";
import PropTypes from 'prop-types';
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
const useStyles = makeStyles({
  root: {
    marginTop: "10px",
    marginRight: "10px",
  },
  delete: {
    marginLeft: "-15px",
    paddingRight: 0,
    paddingTop: 8.1,
    paddingBottom: 8.1,
    paddingLeft: 10,
    minHeight: 0,
    minWidth: 0,
  },
  add:{
    paddingRight: 0,
    paddingTop: 8.1,
    paddingBottom: 8.1,
    paddingLeft: 10,
    minHeight: 0,
    minWidth: 0,

  },

});
const Button = ({ datatest, className, variant, color, onClick, startIcon, text,...props}) => {
  const classes = useStyles();
  return (
    <Btn
      className={clsx(classes.root, classes[className])}
      data-testid={datatest}
      variant={variant}
      color={color}
      startIcon={startIcon}
      onClick={onClick}
      {...props}
    >
      {text}
    </Btn>
  );
  
};
Button.propTypes = {
  className: PropTypes.string,
  variant: PropTypes.oneOf(['contained', 'outlined', null]),
  color: PropTypes.oneOf(['default','primary','secondary']),
  startIcon: PropTypes.element,
  onClick: PropTypes.func,
  text: PropTypes.string,
};

Button.defaultProps= {
  className: undefined,
  variant: 'contained',
  color: 'primary',
  startIcon: undefined,
  onClick: undefined,
  text: "",
};

export default Button;
