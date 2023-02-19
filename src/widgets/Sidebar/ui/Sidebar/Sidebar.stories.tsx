import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'shared/hooks/useTheme';
import { Sidebar } from './Sidebar';

export default {
  title: 'widget/Sidebar',
  component: Sidebar,
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
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar {...args} />;

export const PrimaryLight = Template.bind({});
PrimaryLight.parameters = {
  theme: Theme.LIGHT,
};
PrimaryLight.args = {};

export const PrimaryDark = Template.bind({});
PrimaryDark.parameters = {
  theme: Theme.DARK,
};
PrimaryDark.args = {};

export const CollapsedLight = Template.bind({});
CollapsedLight.parameters = {
  theme: Theme.LIGHT,
};
CollapsedLight.args = {
  defaultCollapsed: true,
};

export const CollapsedDark = Template.bind({});
CollapsedDark.parameters = {
  theme: Theme.DARK,
};
CollapsedDark.args = {
  defaultCollapsed: true,
};
