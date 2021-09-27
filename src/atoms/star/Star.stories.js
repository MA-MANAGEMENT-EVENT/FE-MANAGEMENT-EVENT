import Star from "./Star";

export default {
  title: "Components/Star",
  component: Star,
  argTypes: {
    name: {
      description: "Name of the component",
    },
    value: {
      description: "Selected value",
    },
  },
};

const Template = (args) => <Star {...args} />;

export const Rating = Template.bind({});
Rating.args = {
  name: "ratemembantu",
  value: 0.5, 
};

