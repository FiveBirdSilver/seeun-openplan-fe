import { Meta, StoryObj } from "@storybook/react";
import { Button } from "@repo/ui";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "버튼 크기를 설정합니다",
    },
    variant: {
      control: "select",
      options: ["primary", "secondary", "outline"],
      description: "버튼 스타일 테마를 설정합니다",
    },
    disabled: {
      control: "boolean",
      description: "버튼의 비활성화 상태를 설정합니다",
    },
    fullWidth: {
      control: "boolean",
      description: "버튼의 너비를 100%로 설정합니다",
    },
    isLoading: {
      control: "boolean",
      description: "버튼의 로딩 상태를 설정합니다",
    },
    onClick: { action: "clicked" },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "Primary Button",
    variant: "primary",
    size: "md",
  },
};

export const Secondary: Story = {
  args: {
    children: "Secondary Button",
    variant: "secondary",
    size: "md",
  },
};

export const Outline: Story = {
  args: {
    children: "Outline Button",
    variant: "outline",
    size: "md",
  },
};

export const Small: Story = {
  args: {
    children: "Small Button",
    size: "sm",
  },
};

export const Medium: Story = {
  args: {
    children: "Medium Button",
    size: "md",
  },
};

export const Large: Story = {
  args: {
    children: "Large Button",
    size: "lg",
  },
};

export const Disabled: Story = {
  args: {
    children: "Disabled Button",
    disabled: true,
    variant: "ghost",
  },
};

export const Loading: Story = {
  args: {
    children: "Loading...",
    disabled: true,
    variant: "ghost",
  },
};
