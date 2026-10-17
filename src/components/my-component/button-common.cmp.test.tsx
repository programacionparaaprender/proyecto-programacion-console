import { render, h, describe, it, expect } from '@stencil/vitest';
import { vi } from 'vitest';

describe('storybook-button', () => {
  it('renders with its default properties', async () => {
    const { root } = await render(<storybook-button label="Continue"></storybook-button>);

    await expect(root).toEqualHtml(`
      <storybook-button class="hydrated">
        <button type="button" class="storybook-button storybook-button--medium storybook-button--secondary" style="border-radius: 3em;">
          Continue
        </button>
      </storybook-button>
    `);
  });

  it('renders the primary variant and button attributes', async () => {
    const { root } = await render(
      <storybook-button
        label="Save"
        primary={true}
        size="large"
        backgroundColor="#2563eb"
        borderRadius="8px"
        disabled={true}
        type="submit"
      ></storybook-button>,
    );

    await expect(root).toEqualHtml(`
      <storybook-button class="hydrated">
        <button type="submit" class="storybook-button storybook-button--large storybook-button--primary" disabled style="background-color: rgb(37, 99, 235); border-radius: 8px;">
          Save
        </button>
      </storybook-button>
    `);
  });

  it('bubbles click events from the native button', async () => {
    const { root } = await render(<storybook-button label="Click me"></storybook-button>);
    const handleClick = vi.fn();

    root.addEventListener('click', handleClick);
    root.querySelector('button')?.click();

    expect(handleClick).toHaveBeenCalledOnce();
  });
});
