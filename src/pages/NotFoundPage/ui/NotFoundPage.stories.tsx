import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'app/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'shared/hooks/useTheme';
import { NotFoundPage } from './NotFoundPage';

export default {
  title: 'pages/NotFoundPage',
  component: NotFoundPage,
  argTypes: {
    theme: { control: 'radio' },
  },
} as ComponentMeta<typeof NotFoundPage>;

const Template: ComponentStory<typeof NotFoundPage> = () => <NotFoundPage />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Text',
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Text',
};
