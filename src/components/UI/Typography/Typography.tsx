import { CSSProperties } from 'react';
import { Text as MantineText, TextProps } from '@mantine/core';
import { typographyVariants } from './styles';

interface SharedTypographyProps extends Omit<TextProps, 'variant' | 'style'> {
  variant?: keyof typeof typographyVariants;
  children?: React.ReactNode;
  style?: CSSProperties;
}

export const Typography = ({
  style,
  variant = 'primary',
  children,
  ...props
}: SharedTypographyProps) => {
  const variantStyle = typographyVariants[variant];
  return (
    <MantineText style={{ ...variantStyle, ...style }} {...props}>
      {children}
    </MantineText>
  );
};
