import Typograph from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    color: "#000000",
  },
  link: {
    textDecoration: "none",
    color: "#FFFFFF",
  },
  linklogout: {
    textDecoration: "none",
    color: "#FFFFFF",
    background:"#FF0000",
    borderBottomRightRadius: 5,
    borderTopLeftRadius: 5,
    padding:5
  },
  logo: {
    color: "#FFFFFF",
    fontSize: "20px",
    fontWeight: "bold",
  },
  logofooter: {
    color: "#FFFFFF",
    fontSize: "30px",
    fontWeight: "bold",
    float: "left",
    marginLeft: 40,
  },
  sublogo: {
    color: "#FFFFFF",
    fontSize: "20px",
    fontWeight: "bold",
    float: "left",
    marginLeft: 40,
  },
  cardtext:{
  display: "block",
  width: "250px",
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
  },
});
const Typography = ({ variant, text, className, ...rest }) => {
  const classes = useStyles();
  return (
    <Typograph className={classes[className]} variant={variant} {...rest}>
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
