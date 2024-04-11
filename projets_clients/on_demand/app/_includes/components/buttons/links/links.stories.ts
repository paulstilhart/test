import { StoryObj, Meta } from '@storybook/html';
import {TemplateLinks} from "./templates/linksTemplate";
let Links;
const meta: Meta<typeof Links> = {
    component: Links,
    title: 'Components/Buttons/Links',
    //Definition of the available args for the component
    argTypes: {
        label: {
            control: { type: "text"}
        },
        color: {
            control: { type: "select"},
            options: [
                "primary",
                "secondary",
                "neutral",
                "tertiary-blue",
                "neutral-dark"
            ],
        },
        ShowIconLeft: {
            control: { type: "boolean"}
        },
        ShowIconRight: {
            control: { type: "boolean"}
        },
        size: {
            control: { type: "select"},
            options: [
                "sm",
                "base",
                "lg",
                "xl",
                "2xl",
            ],
        },

    },
};

export default meta;
type Story = StoryObj<typeof Links>;

// Rendering of different variants of the component.
export const Default = TemplateLinks.bind({});
Default.args = {
    label: 'Link text',
    color: 'primary',
    size: 'base',
    ShowIconLeft: true,
    ShowIconRight: true,
};

