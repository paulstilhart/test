import { StoryObj, Meta } from '@storybook/html';
import {TemplateBadgeShips} from "./templates/badgesShipsTemplate";
let BadgesChips
const meta: Meta<typeof BadgesChips> = {
    component: BadgesChips,
    title: 'Components/Badges/Ships',
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
                "primary",
                "secondary",
                "tertiary",
            ],
        },
        withLink: {
            control: { type: "boolean" }
        },
        hideIcon: {
           control: { type: "boolean" }
        },

        hideCloseButton: {
            control: { type: "boolean" }
        }
    },
};

export default meta;
type Story = StoryObj<typeof BadgesChips>;


// Rendering of different variants of the component.
export const ships = TemplateBadgeShips.bind({});
ships.args = {
    label: 'Indicator text',
    color: 'primary',
    size: 'base',
    hideIcon: false,
    hideCloseButton: false,
    withLink: false
};
