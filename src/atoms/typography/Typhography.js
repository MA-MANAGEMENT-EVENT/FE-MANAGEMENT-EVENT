import Typograph from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

const useStyles = makeStyles({
  root: {
    color: "#000000",
  },
  link: {
    textDecoration: "none",
    color: "#FFFFFF",
  },
  logo: {
    color: "#FFFFFF",
  },
});
const Typography = ({ variant, text, className, ...rest }) => {
  const classes = useStyles();
  return (
    <Typograph
      className={clsx(classes.root, classes[className])}
      variant={variant}
      {...rest}
    >
      {text}
    </Typograph>
  );
};

Typography.propTypes = {
  className: PropTypes.string,
  variant: PropTypes.string,
  text: PropTypes.string,
};

Typography.defaultProps = {
  className: undefined,
  variant: "",
  text: "",
};
export default Typography;
