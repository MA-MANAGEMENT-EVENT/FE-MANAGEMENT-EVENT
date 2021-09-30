import TxtField from "@material-ui/core/TextField";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  codingcamp: {
    width: "350px",
    marginBottom: "10px",
  },
  root: {
    width: "250px",
    marginRight: "10px",
  },
});
const TextField = ({
  type,
  variant,
  label,
  name,
  className,
  onChange,
  value,
  ...rest
}) => {
  const classes = useStyles();
  return (
    <TxtField
      // data-testid={datatest}
      // error={error === ""}
      // helperText={error === "" ? "Empty field!" : " "}
      type={type}
      variant={variant}
      label={label}
      name={name}
      className={classes[className]}
      onChange={onChange}
      value={value}
      {...rest}
    />
  );
};
TextField.propTypes = {
  // error: PropTypes.string,
  variant: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  className: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
};

TextField.defaultProps = {
  variant: "outlined",
  type: "text",
  label: "",
  name: "",
  className: "",
  onChange: undefined,
  value: "",
};
export default TextField;
