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
    background: "#FF0000",
    borderBottomRightRadius: 5,
    borderTopLeftRadius: 5,
    padding: 5,
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
  cardtext: {
    // display: "block",
    // whiteSpace: "nowrap",
    textAlign: "justify",
    width: "250px",
    overflow: "hidden",
    textOverflow: "ellipsis",    
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 5,
  },
  cardTitle: {
    fontWeight: 500,
    marginTop: 18,
    height: 70,
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 2,
    maxWidth: '100%',
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
