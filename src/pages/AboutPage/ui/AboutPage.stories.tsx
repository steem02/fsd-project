import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'app/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'shared/hooks/useTheme';
import AboutPage from './AboutPage';

export default {
  title: 'pages/AboutPage',
  component: AboutPage,
  argTypes: {
    theme: { control: 'radio' },
  },
} as ComponentMeta<typeof AboutPage>;

const Template: ComponentStory<typeof AboutPage> = () => <AboutPage />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Text',
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Text',
};
