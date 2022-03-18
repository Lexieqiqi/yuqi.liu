import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Main } from './Main';

export default {
    title: 'Home/Main',
    component: Main,
} as ComponentMeta<typeof Main>;

const Template: ComponentStory<typeof Main> = (args) => <Main {...args} />;

export const MainBody = Template.bind({});
