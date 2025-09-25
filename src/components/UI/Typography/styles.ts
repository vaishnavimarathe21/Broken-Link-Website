import { theme } from '@/theme';

const colors = theme.colors as Record<string, readonly string[]>;

export const typographyVariants = {
  primary: {
    color: colors.primary[5],
  },
  secondary: {
    color: colors.purple[5],
  },
  success: {
    color: colors.success[5],
  },
  warning: {
    color: colors.warning[5],
  },
  error: {
    color: colors.error[5],
  },
};
