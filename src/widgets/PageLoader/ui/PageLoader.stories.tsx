import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'shared/hooks/useTheme';
import { PageLoader } from './PageLoader';

export default {
  title: 'widget/PageLoader',
  component: PageLoader,
  argTypes: {
    theme: { control: 'radio' },
  },
} as ComponentMeta<typeof PageLoader>;

const Template: ComponentStory<typeof PageLoader> = (args) => <PageLoader {...args} />;

export const Light = Template.bind({});
Light.parameters = {
  theme: Theme.LIGHT,
};
export const Dark = Template.bind({});
Dark.parameters = {
  theme: Theme.DARK,
};
