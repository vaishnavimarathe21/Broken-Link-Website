import { theme } from '@/theme';
import { CustomSize, TypographyVariant } from './types';

const colors = theme.colors as Record<string, readonly string[]>;

export const typographyVariants: Record<string, TypographyVariant> = {
  primary: { color: colors.primary[5] },
  secondary: { color: colors.purple[5] },
  success: { color: colors.success[5] },
  warning: { color: colors.warning[5] },
  error: { color: colors.error[5] },
  title: { color: colors.primary[7], size: CustomSize.extraLarge },
  subtitle: { color: colors.primary[6], size: CustomSize.large },
};
