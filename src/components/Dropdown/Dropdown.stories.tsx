import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Dropdown from "./Dropdown";
import styled from "styled-components";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "DodamDodamComponentLibrary/Dropdown",
  component: Dropdown,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Dropdown>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Dropdown> = (args) => (
  <Dropdown {...args} />
);

export const CommonDisabled = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

const items = [
  {
    idx: 1,
    value: "테스트1",
    obj: {
      value: "오브젝트1",
    },
  },
  {
    idx: 2,
    value: "테스트1",
    obj: {
      value: "오브젝트2",
    },
  },
  {
    idx: 3,
    value: "테스트1",
    obj: {
      value: "오브젝트3",
    },
  },
  {
    idx: 4,
    value: "테스트1",
    obj: {
      value: "오브젝트4",
    },
  },
];

const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
  const { value, name } = e.target;
};

CommonDisabled.args = {
  itemkey: "오후1",
  disabled: true,
  disabledItem: "비활성화",
  withDefault: false,
  name: "오후1",
  items: items,
  itemsValuePath: "obj/value",
  onChange: onChange,
};

export const CommonEnabledWithDefault = Template.bind({});

CommonEnabledWithDefault.args = {
  itemkey: "오후1",
  disabled: false,
  disabledItem: "비활성화",
  withDefault: true,
  defaultItem: "디폴트",
  name: "오후1",
  items: items,
  itemsValuePath: "obj/value",
  onChange: onChange,
};

export const CommonEnabledNoneDefault = Template.bind({});

CommonEnabledNoneDefault.args = {
  itemkey: "오후1",
  disabled: false,
  disabledItem: "비활성화",
  withDefault: false,
  name: "오후1",
  items: items,
  itemsValuePath: "obj/value",
  onChange: onChange,
};

export const CommonWithLable = Template.bind({});

CommonWithLable.args = {
  itemkey: "오후1",
  disabled: false,
  disabledItem: "비활성화",
  withDefault: false,
  name: "오후1",
  items: items,
  itemsValuePath: "obj/value",
  lable: <>오후1</>,
  onChange: onChange,
};
