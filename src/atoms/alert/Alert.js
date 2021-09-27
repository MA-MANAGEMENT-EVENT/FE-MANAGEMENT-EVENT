import { Alert as Alertt, AlertTitle } from '@material-ui/lab';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
  formInfo: {
    marginTop:"20px",
  }
});
export const Alert = ({severity, className, title, text}) => {
    const classes = useStyles();
  return (
    <>
      <Alertt severity={severity} className={classes[className]}>
        <AlertTitle>{title}</AlertTitle>
        {text}
      </Alertt>
    </>
  );
};
Alertt.propTypes = {
  className: PropTypes.string,
  severity: PropTypes.oneOf(["info", "error", "warning","success"]),
  title: PropTypes.string,
  text: PropTypes.string,
};

Alertt.defaultProps= {
  className: undefined,
  severity: "info",
  title: "",
  text: "",
};