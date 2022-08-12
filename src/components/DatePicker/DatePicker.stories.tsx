import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import DatePicker from "./DatePicker";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "DodamDodamComponentLibrary/DatePicker",
  component: DatePicker,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof DatePicker>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof DatePicker> = (args) => (
  <DatePicker {...args} />
);

export const Common = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Common.args = {
  width: 200,
  height: 32,
  customStyle: {
    fontSize: 16,
    marginLeft: "auto",
    marginRight: "auto",
  },
  splitCharacter: "-",
  onChange: () => {},
  value: "2022-08-12",
};
