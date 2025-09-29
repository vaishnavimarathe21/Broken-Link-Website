import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from './Typography';
import { expect } from '@storybook/jest';
import { within } from '@storybook/testing-library';

const meta: Meta<typeof Typography> = {
  title: 'Components/UI/Typography',
  component: Typography,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'success', 'warning', 'error', 'title', 'subtitle'],
    },
  },
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof meta>;

// Reusable interaction test
const testTypographyPlay = async ({ canvasElement, args }: { canvasElement: HTMLElement; args: any }) => {
  const canvas = within(canvasElement);
  const component = await canvas.findByTestId('typography-component');
  await expect(component).toBeInTheDocument();

  if (args.variant) {
    expect(component).toHaveClass(`typography-${args.variant}`);
  }
};

export const typography: Story = {
  args: {
    children: 'Hello World!',
    variant: 'success',
  },
  play: testTypographyPlay,
};

export const typographyWithChildren: Story = {
  args: {
    children: <h1>Hello World!</h1>,
  },
  play: testTypographyPlay, // variant check will be skipped
};

export const typographyWithVariant: Story = {
  args: {
    children: 'Hello World!',
    variant: 'title',
  },
  play: testTypographyPlay,
};

export const typographyWithBodyText: Story = {
  args: {
    children: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
      been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
      galley of type and scrambled it to make a type specimen book. It has survived not only five
      centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
      It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
      passages, and more recently with desktop publishing software like Aldus PageMaker including
      versions of Lorem Ipsum`,
  },
  play: testTypographyPlay,
};

export const typographyWithTruncatedText: Story = {
  args: {
    children: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
      been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
      galley of type and scrambled it to make a type specimen book. It has survived not only five
      centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
      It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
      passages, and more recently with desktop publishing software like Aldus PageMaker including
      versions of Lorem Ipsum`,
    lineClamp: 1,
  },
  play: testTypographyPlay,
};
