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

export const typography: Story = {
  args: {
    children: 'Hello World!',
    variant: 'success',
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const component = await canvas.findByTestId('typography-component');
    await expect(component).toBeInTheDocument();
  },
};

export const typographyWithChildren: Story = {
  args: {
    children: <h1>Hello World!</h1>,
  },
};
export const typographyWithVariant: Story = {
  args: {
    children: 'Hello World!',
    variant: 'title',
  },
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
};