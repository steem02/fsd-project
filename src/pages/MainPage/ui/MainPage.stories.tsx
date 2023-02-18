import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'app/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'shared/hooks/useTheme';
import MainPage from './MainPage';

export default {
  title: 'pages/MainPage',
  component: MainPage,
  argTypes: {
    theme: { control: 'radio' },
  },
  decorators: [
    (Story) => (
      <div className="page-wrapper">
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof MainPage>;

const Template: ComponentStory<typeof MainPage> = () => <MainPage />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Text',
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Text',
};
