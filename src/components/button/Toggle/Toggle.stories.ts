import { Meta, StoryObj } from '@storybook/react';

import { Toggle } from '.';

const meta: Meta<typeof Toggle> = {
  title: 'Components/buttons/Toggle',
  component: Toggle,
};

export default meta;
type Story = StoryObj<typeof Toggle>;

export const ButtonToggle: Story = {};
