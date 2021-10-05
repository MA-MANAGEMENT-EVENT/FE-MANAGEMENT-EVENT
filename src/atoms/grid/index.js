import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";


const Index = ({ children, ...rest }) => {
  Index.propTypes = {
    children: PropTypes.node.isRequired.apply,
  };
  Index.defaultProps = {
    children: undefined,
  };
  return (
    <>
      <Grid {...rest}>{children}</Grid>
    </>
  );
};

export default Index