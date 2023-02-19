import { ComponentStory, ComponentMeta } from '@storybook/react';
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

export const Light = Template.bind({});
Light.parameters = {
  theme: Theme.LIGHT,
};

export const Dark = Template.bind({});
Dark.parameters = {
  theme: Theme.DARK,
};
