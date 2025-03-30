import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@repo/ui";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  argTypes: {
    variant: {
      control: "select", 
      options: ["primary", "ghost"], // variant 옵션
      description: "버튼의 스타일 변형",
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "버튼의 크기",
    },
    isLoading: {
      control: "boolean",
      description: "로딩 상태 표시 여부",
    },
    children: {
      control: "text",
      description: "버튼 내부 콘텐츠",
    },
    disabled: {
      control: "boolean",
      description: "비활성화 상태",
    },
    onClick: { action: "clicked" }, // 클릭 이벤트 로깅
  },
  args: {
    children: "다음", // 기본값
    variant: "primary",
    size: "md",
    isLoading: false,
    disabled: false,
  },
  parameters: {
    layout: "centered", // Storybook에서 중앙 정렬
  },
  tags: ["autodocs"], // 자동 문서 생성
};

export default meta;

// Story 타입 정의
type Story = StoryObj<typeof Button>;

// 기본 스토리
export const Default: Story = {
  args: {
    variant: "primary",
    size: "md",
  },
};

// Ghost 변형
export const Ghost: Story = {
  args: {
    variant: "ghost",
    size: "md",
  },
};

// 크기별 스토리
export const Small: Story = {
  args: {
    variant: "primary",
    size: "sm",
  },
};

export const Medium: Story = {
  args: {
    variant: "primary",
    size: "md",
  },
};

export const Large: Story = {
  args: {
    variant: "primary",
    size: "lg",
  },
};

// 로딩 상태
export const Loading: Story = {
  args: {
    variant: "primary",
    size: "md",
    isLoading: true,
    children: "Loading...", // 로딩 중 텍스트
  },
};

// 비활성화 상태
export const Disabled: Story = {
  args: {
    variant: "primary",
    size: "md",
    disabled: true,
  },
};

// 커스텀 클래스 추가
export const CustomClass: Story = {
  args: {
    variant: "primary",
    size: "md",
    className: "border-2 border-red-500",
  },
};
