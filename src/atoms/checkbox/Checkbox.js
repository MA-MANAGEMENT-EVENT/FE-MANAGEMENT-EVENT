import React from "react";
import Chekbox from "@material-ui/core/Checkbox";

const Checkbox = ({ value, color, ...rest }) => {
  return <Chekbox value={value} color={color} {...rest} />;
};
export default Checkbox;
