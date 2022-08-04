import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "./Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "DodamDodamComponentLibrary/Button",
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const PrimaryEnabled = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
PrimaryEnabled.args = {
  width: 100,
  height: 20,
  type: "primary",
  onClick: () => console.log("테스트"),
  disabled: false,
};

export const PrimaryDisabled = Template.bind({});

PrimaryDisabled.args = {
  width: 100,
  height: 20,
  type: "primary",
  onClick: () => console.log("테스트"),
  disabled: true,
};

export const CommonEnabled = Template.bind({});

CommonEnabled.args = {
  width: 100,
  height: 20,
  onClick: () => console.log("테스트"),
  disabled: false,
};

export const CommonDisabled = Template.bind({});

CommonDisabled.args = {
  width: 100,
  height: 20,
  onClick: () => console.log("테스트"),
  disabled: true,
};
