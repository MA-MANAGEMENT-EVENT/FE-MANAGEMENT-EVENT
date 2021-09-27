import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from 'prop-types';
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";

const labels = {
  0.5: "Useless",
  1: "Useless+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+",
};
const useStyles = makeStyles({
  root: {
    width: 200,
    display: "flex",
    alignItems: "center",
  },
});

const Star = ({datatest, name, value, onChange}) => {
  const [hover, setHover] = useState(-1);
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <Rating
        name={name}
        data-testid={datatest}
        value={parseFloat(value)}
        precision={0.5}
        onChange={onChange}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
      />
      {value !== null && (
        <Box ml={2}>{labels[hover !== -1 ? hover : parseFloat(value)]}</Box>
      )}
    </div>
  );
};
Star.propTypes = {
  name: PropTypes.string,
  value: PropTypes.number,
  onChange: PropTypes.func,
};

Star.defaultProps= {
  name:"",
  value:0,
  onChange:undefined,
};

export default Star;
