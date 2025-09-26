import { theme } from '@/theme';
import { CustomSize } from './Typography';

const colors = theme.colors as Record<string, readonly string[]>;

interface TypographyVariant {
  color: string;
  size?: CustomSize;
}

export const typographyVariants: Record<string, TypographyVariant> = {
  primary: { color: colors.primary[5] },
  secondary: { color: colors.purple[5] },
  success: { color: colors.success[5] },
  warning: { color: colors.warning[5] },
  error: { color: colors.error[5] },
  title: { color: colors.primary[7], size: 'extralarge' },
  subtitle: { color: colors.primary[6], size: 'large' },
};
