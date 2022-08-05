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
  width: 110,
  height: 35,
  type: "primary",
  onClick: () => console.log("테스트"),
  disabled: false,
  children: <>테스트</>,
  fontSize: 14,
};

export const PrimaryDisabled = Template.bind({});

PrimaryDisabled.args = {
  width: 110,
  height: 35,
  type: "primary",
  onClick: () => console.log("테스트"),
  disabled: true,
  children: <>테스트</>,
  fontSize: 14,
};

export const CommonEnabled = Template.bind({});

CommonEnabled.args = {
  width: 110,
  height: 35,
  onClick: () => console.log("테스트"),
  disabled: false,
  children: <>테스트</>,
  fontSize: 14,
};

export const CommonDisabled = Template.bind({});

CommonDisabled.args = {
  width: 110,
  height: 35,
  onClick: () => console.log("테스트"),
  disabled: true,
  children: <>테스트</>,
  fontSize: 14,
};
