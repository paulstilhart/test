import { StoryObj, Meta } from '@storybook/html';
import {TemplateCardMessage} from './templates/CardMessageTemplate';

let CardMessage
const meta: Meta<typeof CardMessage> = {
    component: CardMessage,
    title: 'Components/Cards/CardMessage',
    //Definition of the available args for the component
    argTypes: {
        text: {
            control: { type: "text"},
        },
        variant: {
            table: {
                disable: true
            }
        }
    },
};

export default meta;
type Story = StoryObj<typeof CardMessage>;

// Rendering of different variants of the component.
export const Tips = TemplateCardMessage.bind({});
Tips.args = {
    text: 'Tips - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida habitant risus cursus neque scelerisque tempor, pretium interdum.',
    variant : 'tips'
};

export const Quotes = TemplateCardMessage.bind({});
// Define argTypes specifically for Quotes
Quotes.argTypes = {
    author: {
        control: 'text'
    },
    description: {
        control: 'text'
    },


};
Quotes.args = {
    text: 'Quotes - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida habitant risus cursus neque scelerisque tempor, pretium interdum.',
    author: 'Joseph McFall',
    description: 'CTO at Google',
    variant : 'quotes'
};
