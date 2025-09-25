import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from './Typography';

const meta: Meta<typeof Typography> = {
  title: 'Components/UI/Typography',
  component: Typography,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof meta>;

export const typography: Story = {
  args: {
    children: 'Hello World!',
    variant: 'warning',
  },
};

export const typographyWithH1: Story = {
  render: () => (
    <Typography>
      <h1>Hello world!</h1>
    </Typography>
  ),
};
export const typographyWithVariant: Story = {
  render: () => {
    return <Typography variant="error">Hello World!</Typography>;
  },
};
