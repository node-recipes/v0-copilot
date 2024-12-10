// Example storybook: button group
import type { Meta, StoryObj } from "@storybook/react";
import ExampleButtonGroup from "./ExampleButtonGroup";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof ExampleButtonGroup> = {
  title: "ExampleButtonGroup",
  component: ExampleButtonGroup,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const LightModeHorizontal: Story = {
  args: {
    isDarkMode: false,
    isVertical: false,
  },
};

export const LightModeVertical: Story = {
  args: {
    isDarkMode: false,
    isVertical: true,
  },
};

export const DarkModeHorizontal: Story = {
  args: {
    isDarkMode: true,
    isVertical: false,
  },
};

export const DarkModeVertical: Story = {
  args: {
    isDarkMode: true,
    isVertical: true,
  },
};
