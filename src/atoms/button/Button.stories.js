import Button from "./Button";
import AddIcon from "@material-ui/icons/Add";
import CloseIcon from "@material-ui/icons/Close";
export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    text: {
      description: "Text in button",
    },
    className: {
      description: "Group styles by class",
    },
    variant: {
      description: "What variant to use",
    },
    color: {
      description: "What color to use",
    },
    startIcon: {
      description: "What starticon to use",
    },
    onClick:{
      description: "Click handler"
    }


  },
  //   argTypes: {
  //     backgroundColor: { control: 'color' },
  //   },
};
const Template = (args) => <Button {...args} />;
export const Submit = Template.bind({});
Submit.args = {
  text: "Submit",
};

export const Form = Template.bind({});
Form.args = {
  text: "FORM1",
};
export const CurrentForm = Template.bind({});
CurrentForm.args = {
  text: "FORM1",
  variant: "outlined",
};


export const Prev = Template.bind({});
Prev.args = {
  text: "Prev",
};

export const Next = Template.bind({});
Next.args = {
  text: "Next",
};
export const Add = Template.bind({});
Add.args = {
  startIcon: <AddIcon />,
  className: "add",
};
export const Delete = Template.bind({});
Delete.args = {
  startIcon: <CloseIcon />,
  color: "secondary",
  className: "delete",
};
