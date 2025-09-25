import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from './Typography';

const meta: Meta<typeof Typography> = {
  title: 'Components/UI/Typography',
  component: Typography,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'success', 'warning', 'error'],
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
};

export const typographyWithChildren: Story = {
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

export const typographyWithBodyText: Story = {
  render: () => {
    return (
      <Typography>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
        galley of type and scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
        passages, and more recently with desktop publishing software like Aldus PageMaker including
        versions of Lorem Ipsum
      </Typography>
    );
  },
};

export const typographyWithTruncatedText: Story = {
  render: (args) => {
    return (
      <Typography lineClamp={args.lineClamp}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
        galley of type and scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
        passages, and more recently with desktop publishing software like Aldus PageMaker including
        versions of Lorem Ipsum
      </Typography>
    );
  },
  args: {
    lineClamp: 1,
  },
};
