export const CustomSize = {
  small: 'small',
  medium: 'medium',
  large: 'large',
  extraLarge: 'extraLarge',
} as const;

export type CustomSize = keyof typeof CustomSize;

export interface TypographyVariant {
  color: string;
  size?: CustomSize;
}
