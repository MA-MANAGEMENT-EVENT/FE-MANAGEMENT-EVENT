import TextField from "./TextField";

export default {
  title: "Components/TextField",
  component: TextField,
  argTypes: {
    name: {
      description: "Name of the component",
    },
    value: {
      description: "Input value",
    },
  },
};

const Template = (args) => <TextField {...args} />;

export const Input = Template.bind({});
Input.args = {
  label: "Nama Trainer",
  value: "Trainer",
  name: `namatrainer-1`,
  className: "trainer",
};

