import { h } from '@stencil/core';
import type { JSXBase } from '@stencil/core/internal';
import './button-component.css';

export interface ButtonProps extends Omit<JSXBase.ButtonHTMLAttributes<HTMLButtonElement>, 'style'> {
  primary?: boolean;
  backgroundColor?: string | null;
  borderRadius?: string;
  size?: string;
  label: string;
  style?: JSXBase.ButtonHTMLAttributes<HTMLButtonElement>['style'];
}

/** Primary UI component for user interaction */
export const Button = ({
  primary = false,
  backgroundColor = null,
  borderRadius = '3em',
  size = 'medium',
  label,
  style = {},
  ...props
}: ButtonProps) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';

  return (
    <button
      type="button"
      class={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      style={{
        ...style,
        ...(backgroundColor && { backgroundColor }),
        borderRadius,
      }}
      {...props}
    >
      {label}
    </button>
  );
};