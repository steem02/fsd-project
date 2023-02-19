import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'shared/hooks/useTheme';
import { ThemeSwitcher } from './ThemeSwitcher';

export default {
  title: 'features/ThemeSwitcher',
  component: ThemeSwitcher,
  argTypes: {
    theme: { control: 'radio' },
  },
} as ComponentMeta<typeof ThemeSwitcher>;

const Template: ComponentStory<typeof ThemeSwitcher> = (args) => <ThemeSwitcher {...args} />;

export const Light = Template.bind({});
Light.parameters = {
  theme: Theme.LIGHT,
};

export const Dark = Template.bind({});
Dark.parameters = {
  theme: Theme.DARK,
};
