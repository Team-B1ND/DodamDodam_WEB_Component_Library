import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import TextArea from "./TextArea";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "DodamDodamComponentLibrary/TextArea",
  component: TextArea,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof TextArea>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TextArea> = (args) => (
  <TextArea {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  width: 315,
  height: 65,
  onChange: () => {},
  placeHolder: "값을 입력해주세요!",
  text: "테스트",
  textMaxLength: 100,
  name: "none",
  customStyle: { fontSize: 12 },
};
