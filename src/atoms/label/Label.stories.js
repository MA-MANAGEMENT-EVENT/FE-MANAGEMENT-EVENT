import Label from "./Label"

export default {
  title: "Components/Label",
  component: Label,
  argTypes: {
    text: {
      description: "Text in a component",
    },
    className: {
      description: "Group styles by class",
    },
  },
};

const Template = (args) => <Label {...args} />;

export const title = Template.bind({});
title.args = {
    text: "CODING CAMP FEEDBACK",
    className: "title",
};

export const question = Template.bind({});
question.args = {
    text: "Seberapakah membantu pelatihan Coding Camp ini untuk anda ? ",
    className: "question",
};

export const footer = Template.bind({});
footer.args = {
    text: "footer",
    className: "footerLabel",
};
