import Button from '@mui/material/Button';
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
const useStyles = makeStyles({
  root: {
    marginTop: "10px",
    marginRight: "10px",
    background:"#3f50b5",
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
  add: {
    paddingRight: 0,
    paddingTop: 8.1,
    paddingBottom: 8.1,
    paddingLeft: 10,
    minHeight: 0,
    minWidth: 0,
  },

});
const Buton = ({
  datatest,
  className,
  variant,
  color,
  onClick,
  startIcon,
  text,
  ...rest
}) => {
  const classes = useStyles();
  return (
    <Button
      className={clsx(classes.root, classes[className])}
      data-testid={datatest}
      variant={variant}
      color={color}
      startIcon={startIcon}
      onClick={onClick}
      {...rest}
    >
      {text}
    </Button>
  );
};
Buton.propTypes = {
  className: PropTypes.string,
  variant: PropTypes.oneOf(["contained", "outlined", null]),
  color: PropTypes.oneOf([
    "default",
    "primary",
    "secondary",
    "inherit",
    "success",
    "error",
    "info",
    "warning",
  ]),
  startIcon: PropTypes.element,
  onClick: PropTypes.func,
  text: PropTypes.string,
};

Buton.defaultProps = {
  className: undefined,
  variant: "contained",
  color: "primary",
  startIcon: undefined,
  onClick: undefined,
  text: "",
};


export default Buton;
