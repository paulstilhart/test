import { StoryObj, Meta } from '@storybook/html';
import {TemplateBadgeLabel} from "./templates/badgesLabelTemplate";
let BadgesLabel;

const meta: Meta<typeof BadgesLabel> = {
    component: BadgesLabel,
    title: 'Components/Badges/Label',
    //Definition of the available args for the component
    argTypes: {
        label: {
            control: { type: "text"},
        },
        size: {
            control: { type: "select"},
            options: [
                "sm",
                "base",
                "lg",
                "xl"
            ],
        },
        color: {
            control: { type: "select"},
            options: [
                "neutral",
                "primary",
                "secondary",
                "tertiary",
            ],
        },
        theme: {
            control: { type: "select"},
            options: [
                "dark",
                "light",
                "outline",
            ],
        },
        showIconLeft: {
            control: {type: "boolean"},
        },
        showIconRight: {
            control: {type: "boolean"},
        },
        variant: {
            control : {type: "select"},
            options: [
                "rounded-badge",
                "rounded-full",
            ],
            table: {
                disable: true
            }
        }
    },
};

export default meta;
type Story = StoryObj<typeof BadgesLabel>;

// Rendering of different variants of the component.
export const Cercles = TemplateBadgeLabel.bind({});
Cercles.args = {
    label: 'Label text',
    color: 'primary',
    theme: 'dark',
    size: 'base',
    variant: "rounded-full",
    showIconLeft: true,
    showIconRight: true,
};

export const Squares = TemplateBadgeLabel.bind({});
Squares.args = {
    label: 'Label text',
    color: 'primary',
    theme: 'dark',
    size: 'base',
    variant: "rounded-badge",
    showIconLeft: true,
    showIconRight: true,
};