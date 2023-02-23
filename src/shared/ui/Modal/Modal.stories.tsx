import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'shared/hooks/useTheme';
import { Modal } from './Modal';

export default {
  title: 'shared/Modal',
  component: Modal,
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
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal isOpen>mock text</Modal>;

export const Light = Template.bind({});
Light.parameters = {
  theme: Theme.LIGHT,
};
Light.args = {
  isOpen: true,
};
export const Dark = Template.bind({});
Dark.parameters = {
  theme: Theme.DARK,
};
