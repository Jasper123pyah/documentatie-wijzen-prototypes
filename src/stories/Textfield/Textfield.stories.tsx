import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Textfield } from '../../components/textfield/Textfield';

export default {
    name: 'Components/Textfield',
    component: Textfield,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Textfield>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Textfield> = (args) => <Textfield{...args} />;

export const Primary = Template.bind({});
export const Secondary = Template.bind({});

Secondary.args = {
    placeholder: 'Secondary'
}