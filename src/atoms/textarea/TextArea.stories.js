import TextArea from "./TextArea";

export default {
  title: "Components/TextArea",
  component: TextArea,
  argTypes: {
    name: {
      description: "Name of the component",
    },
    className: {
      description: "Group styles by class",
    },
    minRows: {
      description: "Height component"
    },
    placeholder: {
      description: "Default text"
    },
    value: {
      description: "value from input"
    },
  },
};

const Template = (args) => <TextArea {...args} />;

export const saran = Template.bind({});
saran.args = {
  name: "saran",
};

