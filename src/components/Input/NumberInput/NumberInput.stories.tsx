import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import NumberInput from "./NumberInput";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "DodamDodamComponentLibrary/Input",
  component: NumberInput,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof NumberInput>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof NumberInput> = (args) => (
  <NumberInput {...args} />
);

export const CommonNumber = Template.bind({});

CommonNumber.args = {
  width: 50,
  onChange: () => {},
  value: 0,
  name: "test",
};
