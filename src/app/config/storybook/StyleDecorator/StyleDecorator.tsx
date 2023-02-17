import { Story } from '@storybook/react';
import '../../../styles/reset.scss';
import '../../../styles/variables/global.scss';
import '../../../styles/global.scss';
import '../../../styles/themes/normal.scss';
import '../../../styles/themes/dark.scss';

export const StyleDecorator = (story: () => Story) => story();
