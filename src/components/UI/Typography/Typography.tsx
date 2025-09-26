import { CSSProperties } from 'react';
import { Text as MantineText, TextProps } from '@mantine/core';
import { typographyVariants } from './styles';

type CustomSize = 'small' | 'medium' | 'large' | 'extralarge';

const sizeMapper: Record<CustomSize, string> = {
  small: 'sm',
  medium: 'md',
  large: 'lg',
  extralarge: 'xl',
};

interface SharedTypographyProps extends Omit<TextProps, 'variant' | 'style' | 'size'> {
  variant?: keyof typeof typographyVariants;
  children?: React.ReactNode;
  style?: CSSProperties;
  size?: CustomSize;
}

export const Typography = ({
  style,
  variant = 'primary',
  size = 'medium',
  children,
  ...props
}: SharedTypographyProps) => {
  const variantStyle = typographyVariants[variant];
  const mappedSize = sizeMapper[size];

  return (
    <MantineText size={mappedSize} style={{ ...variantStyle, ...style }} {...props}>
      {children}
    </MantineText>
  );
};
