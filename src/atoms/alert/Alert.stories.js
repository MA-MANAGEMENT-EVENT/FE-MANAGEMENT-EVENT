import {Alert} from "./Alert";
export default {
  title: "Components/Alert",
  component: Alert,
  argTypes: {
    title:{
      description: "Title in alert"
    },
    text: {
      description: "Text in a component",
    },
    className: {
      description: "Group styles by class",
    },
    severity: {
      description: "What severity to use",
    },


  },
  //   argTypes: {
  //     backgroundColor: { control: 'color' },
  //   },
};
const Template = (args) => <Alert {...args} />;
export const formInfo = Template.bind({});
formInfo.args = {
  severity: "info",
  text: "This form is used to improve the quality of our services",
  className: "formInfo",
};
export const formError = Template.bind({});
formError.args = {
  severity: "error",
  text: "This is an error alert — error message",
  className: "formInfo",
};

