import { Divider } from './Divider';
import { dividerVariants } from './styles';
import { DividerProps } from './Divider';

export default {
  title: 'UI/Divider',
  component: Divider,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: Object.keys(dividerVariants),
    },
  },
};

export const Default = (args: DividerProps) => <Divider {...args} />;
Default.args = {
  variant: 'horizontal',
};
