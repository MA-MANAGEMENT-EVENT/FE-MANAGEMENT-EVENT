import RadioButton from "./RadioButton";

export default {
  title: "Components/RadioButton",
  component: RadioButton,
  argTypes: {
    buttonlabel: {
      description: "Text in each buttons",
    },
    buttonvalue: {
      description: "Value in each buttons",
    },
    groupname: {
      description: "Group name"
    },
    groupvalue:{
      description: "Selected value",
      options: ['ya', 'tidak'],
      control: { type: 'radio' }
    }
  
  },
};
const Template = (args) => {
return(<RadioButton {...args} />)};

export const TwoOptions = Template.bind({});

TwoOptions.args = {
  buttonvalue: ["ya", "tidak"],
  buttonlabel: ["ya", "tidak"],
  groupname: "twooptions",
};

