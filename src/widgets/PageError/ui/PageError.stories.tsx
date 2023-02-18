import { ComponentStory, ComponentMeta, Story } from '@storybook/react';
import { ThemeDecorator } from 'app/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'shared/hooks/useTheme';
import { PageError } from './PageError';

export default {
  title: 'widget/PageError',
  component: PageError,
  argTypes: {
    theme: { control: 'radio' },
  },
} as ComponentMeta<typeof PageError>;

const Template: ComponentStory<typeof PageError> = () => <PageError />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Text',
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Text',
};
