import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'app/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'shared/hooks/useTheme';
import { PageLoader } from './PageLoader';

export default {
  title: 'widget/PageLoader',
  component: PageLoader,
  argTypes: {
    theme: { control: 'radio' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof PageLoader>;

const Template: ComponentStory<typeof PageLoader> = (args) => <PageLoader {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Text',
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Text',
};
