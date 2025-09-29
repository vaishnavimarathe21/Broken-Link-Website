import { within, expect } from '@storybook/testing-library';

export const testTypographyPlay = async ({ canvasElement, args }: { canvasElement: HTMLElement; args: any }) => {
  const canvas = within(canvasElement);
  const component = await canvas.findByTestId('typography-component');

 
  await expect(component).toBeInTheDocument();

  
  if (args.variant) {
    expect(component).toHaveClass(`typography-${args.variant}`);
  }
};