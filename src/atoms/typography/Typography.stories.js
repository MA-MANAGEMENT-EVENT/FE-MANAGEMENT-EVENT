import Typography from "./Typhography";

export default {
  title: "Components/Typography",
  component: Typography,
  argTypes: {
    variant: {
      description: "Size Text",
    },
    text: {
      description: "Text",
    },
  },
};

const Template = (args) => <Typography {...args} />;

export const NavText = Template.bind({});
NavText.args = {
  variant:"h5",
  text:"Feedback" ,
};

