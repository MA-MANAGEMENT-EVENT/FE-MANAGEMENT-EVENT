import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import PropTypes from 'prop-types';
import FormControlLabel from '@material-ui/core/FormControlLabel';
const RadioButton = ({groupname, groupvalue, onChange, buttonvalue, buttonlabel}) => {
    return (
        <RadioGroup row name={groupname} value={groupvalue} onChange={onChange}>
          {buttonvalue.map((value,i)=>{
            return <FormControlLabel key= {i} value={value} control={<Radio/>} label={buttonlabel[i]} />
          })}
       </RadioGroup>
    );
  };
  RadioButton.propTypes = {
    groupname: PropTypes.string,
    groupvalue: PropTypes.any, 
    onChange: PropTypes.func,
    buttonvalue:PropTypes.array,
    buttonlabel:PropTypes.array,
  };
  
  RadioButton.defaultProps= {
    groupname: "",
    groupvalue: "", 
    onChange: undefined,
    buttonvalue: [],
    buttonlabel: [],
  };
 
  export default RadioButton;
  