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

export const Primary = Template.bind({});
Primary.args = {
  children: 'Text',
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Text',
};
