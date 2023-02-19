import { ComponentStory, ComponentMeta } from '@storybook/react';
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

export const Light = Template.bind({});
Light.parameters = {
  theme: Theme.LIGHT,
};

export const Dark = Template.bind({});
Dark.parameters = {
  theme: Theme.DARK,
};
