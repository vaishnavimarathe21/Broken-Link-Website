import { theme } from '@/theme';

const colors = theme.colors;

export const buttonVariants = {
  primary: {
    backgroundColor: colors.cyan[5],
    color: 'white',
  },
  secondary: {
    backgroundColor: colors.purple[5],
    color: 'white',
  },
  success: {
    backgroundColor: colors.success[5],
    color: 'white',
  },
  warning: {
    backgroundColor: colors.warning[5],
    color: 'white',
  },
  error: {
    backgroundColor: colors.error[5],
    color: 'white',
  },
  outline: {
    backgroundColor: 'transparent',
    color: colors.cyan[5],
    border: `2px solid ${colors.cyan[5]}`,
  },
  ghost: {
    backgroundColor: 'transparent',
    color: colors.cyan[5],
  },
};
