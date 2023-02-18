import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Size } from 'shared/types/types';
import { AppLink, AppLinkVariant } from './AppLink';

export default {
  title: 'shared/AppLink',
  component: AppLink,
  argTypes: {
    theme: { control: 'radio' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: AppLinkVariant.PRIMARY,
  children: 'Text',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: AppLinkVariant.SECONDARY,
  children: 'Text',
};

export const Large = Template.bind({});
Large.args = {
  variant: AppLinkVariant.PRIMARY,
  size: Size.L,
  children: 'Large',
};

export const Underline = Template.bind({});
Underline.args = {
  variant: AppLinkVariant.PRIMARY,
  underline: true,
  children: 'Large',
};
