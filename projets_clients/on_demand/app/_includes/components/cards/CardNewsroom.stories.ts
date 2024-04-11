import { StoryObj, Meta } from '@storybook/html';
import {TemplateCardNewsroom} from './templates/CardNewsroomTemplate';

let CardNewsroom;
const meta: Meta<typeof CardNewsroom> = {
    component: CardNewsroom,
    title: 'Components/Cards/CardNewsroom',
    //Definition of the available args for the component
    argTypes: {
        label: {
            control: { type: "text"},
        },

        category: {
            control: { type: "text"},
        },

        description: {
            control: { type: "text"},
        },

        linkText: {
            control: {type: "text"}

        },
        variant: {
            table: {
                disable: true
            }
        }
    },
};

export default meta;
type Story = StoryObj<typeof CardNewsroom>;

// Rendering of different variants of the component.
export const News = TemplateCardNewsroom.bind({});
News.args = {
    label: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do...',
    category: 'Label Lorem ipsum dolor sit amet',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida habitant risus ...',
    linkText: 'Link text',
    variant: 'news'
};

export const Press = TemplateCardNewsroom.bind({});
Press.argTypes = {
    time: {
        control: 'number'
    },
    date: {
        control: 'text'
    },
};
Press.args = {
    label: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do...',
    category: 'communiqué de presse',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida habitant risus ...',
    linkText: 'Link text',
    time: 10,
    date: '20/12/23',
    variant: 'press',
};