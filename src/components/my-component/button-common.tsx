import { Component, Prop, h } from '@stencil/core';

/** Button web component that can be consumed by React and other frameworks. */
@Component({
  tag: 'storybook-button',
  styleUrl: 'button-component.css',
  shadow: false,
})
export class Button {
  @Prop() primary = false;

  @Prop() backgroundColor: string | null = null;

  @Prop() borderRadius = '3em';

  @Prop() size = 'medium';

  @Prop() label = '';

  @Prop() disabled = false;

  @Prop() type: 'button' | 'submit' | 'reset' = 'button';

  render() {
    const mode = this.primary ? 'storybook-button--primary' : 'storybook-button--secondary';

    return (
      <button
        type={this.type}
        class={['storybook-button', `storybook-button--${this.size}`, mode].join(' ')}
        style={{
          ...(this.backgroundColor && { backgroundColor: this.backgroundColor }),
          borderRadius: this.borderRadius,
        }}
        disabled={this.disabled}
      >
        {this.label}
      </button>
    );
  }
}
