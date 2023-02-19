import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'app/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'shared/hooks/useTheme';
import { Loader } from './Loader';

export default {
  title: 'shared/Loader',
  component: Loader,
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
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />;

export const Light = Template.bind({});
Light.parameters = {
  theme: Theme.LIGHT,
};

export const Dark = Template.bind({});
Dark.parameters = {
  theme: Theme.DARK,
};
