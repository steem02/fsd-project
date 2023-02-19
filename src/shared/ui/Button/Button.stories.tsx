import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'shared/hooks/useTheme';
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
Outlined.parameters = {
  theme: Theme.LIGHT,
};
Outlined.args = {
  children: 'Button',
  variant: ButtonVariant.OUTLINED,
};

export const Contained = Template.bind({});
Contained.parameters = {
  theme: Theme.LIGHT,
};
Contained.args = {
  children: 'Button',
  variant: ButtonVariant.CONTAINED,
};

export const Cleared = Template.bind({});
Cleared.parameters = {
  theme: Theme.LIGHT,
};
Cleared.args = {
  children: 'Button',
  variant: ButtonVariant.CLEARED,
};

export const SquareContained = Template.bind({});
SquareContained.parameters = {
  theme: Theme.LIGHT,
};
SquareContained.args = {
  children: '>',
  variant: ButtonVariant.CONTAINED,
  square: true,
};

export const SquareOutlined = Template.bind({});
SquareOutlined.parameters = {
  theme: Theme.LIGHT,
};
SquareOutlined.args = {
  children: '<',
  variant: ButtonVariant.OUTLINED,
  square: true,
};

export const OutlinedDark = Template.bind({});
OutlinedDark.parameters = {
  theme: Theme.DARK,
};
OutlinedDark.args = {
  children: 'Button',
  variant: ButtonVariant.OUTLINED,
};

export const ContainedDark = Template.bind({});
ContainedDark.parameters = {
  theme: Theme.DARK,
};
ContainedDark.args = {
  children: 'Button',
  variant: ButtonVariant.CONTAINED,
};

export const ClearedDark = Template.bind({});
ClearedDark.parameters = {
  theme: Theme.DARK,
};
ClearedDark.args = {
  children: 'Button',
  variant: ButtonVariant.CLEARED,
};

export const SquareContainedDark = Template.bind({});
SquareContainedDark.parameters = {
  theme: Theme.DARK,
};
SquareContainedDark.args = {
  children: '>',
  variant: ButtonVariant.CONTAINED,
  square: true,
};

export const SquareOutlinedDark = Template.bind({});
SquareOutlinedDark.parameters = {
  theme: Theme.DARK,
};
SquareOutlinedDark.args = {
  children: '<',
  variant: ButtonVariant.OUTLINED,
  square: true,
};
