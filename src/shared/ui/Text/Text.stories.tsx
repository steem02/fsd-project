import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Text, TextVariant } from 'shared/ui/Text/Text';
import { Theme } from 'shared/hooks/useTheme';

export default {
  title: 'shared/Text',
  component: Text,
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'Title lorem ipsun',
  text: 'Description Description Description Description',
};
Primary.parameters = {
  theme: Theme.LIGHT,
};

export const ErrorLight = Template.bind({});
ErrorLight.parameters = {
  theme: Theme.LIGHT,
};
ErrorLight.args = {
  title: 'Title lorem ipsun',
  text: 'Description Description Description Description',
  variant: TextVariant.ERROR,
};

export const ErrorDark = Template.bind({});
ErrorDark.parameters = {
  theme: Theme.DARK,
};
ErrorDark.args = {
  title: 'Title lorem ipsun',
  text: 'Description Description Description Description',
  variant: TextVariant.ERROR,
};

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
  title: 'Title lorem ipsun',
};
OnlyTitle.parameters = {
  theme: Theme.LIGHT,
};

export const OnlyText = Template.bind({});
OnlyText.args = {
  text: 'Description Description Description Description',
};
OnlyText.parameters = {
  theme: Theme.LIGHT,
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  title: 'Title lorem ipsun',
  text: 'Description Description Description Description',
};
PrimaryDark.parameters = {
  theme: Theme.DARK,
};

export const OnlyTitleDark = Template.bind({});
OnlyTitleDark.args = {
  title: 'Title lorem ipsun',
};
OnlyTitleDark.parameters = {
  theme: Theme.DARK,
};

export const OnlyTextDark = Template.bind({});
OnlyTextDark.args = {
  text: 'Description Description Description Description',
};
OnlyTextDark.parameters = {
  theme: Theme.DARK,
};
