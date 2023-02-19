import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'app/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'shared/hooks/useTheme';
import { Navbar } from './Navbar';

export default {
  title: 'widget/Navbar',
  component: Navbar,
  argTypes: {
    theme: { control: 'radio' },
  },
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = () => <Navbar />;

export const Light = Template.bind({});
Light.parameters = {
  theme: Theme.LIGHT,
};
Light.args = {
  children: 'Text',
};

export const Dark = Template.bind({});
Dark.parameters = {
  theme: Theme.DARK,
};
Dark.args = {
  children: 'Text',
};
