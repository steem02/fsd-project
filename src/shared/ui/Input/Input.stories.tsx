import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'shared/hooks/useTheme';
import { Input } from './Input';

export default {
  title: 'shared/Input',
  component: Input,
  argTypes: {
    variant: { control: 'radio' },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Light = Template.bind({});
Light.parameters = {
  theme: Theme.LIGHT,
};
Light.args = { value: 'Login' };

export const Dark = Template.bind({});
Dark.parameters = {
  theme: Theme.DARK,
};
Dark.args = { value: 'Password' };
