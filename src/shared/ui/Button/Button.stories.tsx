import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Size } from 'shared/types/types';
import { Button, ButtonVariant } from './Button';

export default {
  title: 'shared/Button',
  component: Button,
  argTypes: {
    variant: { control: 'radio' },
  },
  args: {
    size: Size.M,
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Outlined = Template.bind({});
Outlined.args = {
  children: 'Button',
  variant: ButtonVariant.OUTLINED,
};

export const Contained = Template.bind({});
Contained.args = {
  children: 'Button',
  variant: ButtonVariant.CONTAINED,
};

export const Cleared = Template.bind({});
Cleared.args = {
  children: 'Button',
  variant: ButtonVariant.CLEARED,
};

export const SquareContained = Template.bind({});
SquareContained.args = {
  children: '>',
  variant: ButtonVariant.CONTAINED,
  square: true,
};

export const SquareOutlined = Template.bind({});
SquareOutlined.args = {
  children: '<',
  variant: ButtonVariant.OUTLINED,
  square: true,
};
