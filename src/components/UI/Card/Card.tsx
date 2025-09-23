import React, { ReactNode } from 'react';
import { Card as MantineCard } from '@mantine/core';
import { cardStyles } from './styles';

interface SharedCardProps {
  children: ReactNode;
  className?: string;
}

export const Card = ({ children, className }: SharedCardProps) => {
  const style = cardStyles.default; 

  return (
    <MantineCard style={style} className={className}>
      {children}
    </MantineCard>
  );
};