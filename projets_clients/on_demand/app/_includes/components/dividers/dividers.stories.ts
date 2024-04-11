import { StoryObj, Meta } from '@storybook/html';
import Dividers from "./html/dividers.html";
import DividersCenterAvatar from "./html/dividers-center--avatar.html";
import DividersCenterBadge from "./html/dividers-center--badge.html";
import DividersCenterIcon from "./html/dividers-center--icon.html";
import DividersCenterText from "./html/dividers-center--text.html";
import DividersLeftAvatar from "./html/dividers-left--avatar.html";
import DividersLeftBadge from "./html/dividers-left--badge.html";
import DividersLeftIcon from "./html/dividers-left--icon.html";
import DividersLeftText from "./html/dividers-left--text.html";

const meta: Meta<typeof Dividers> = {
    component: Dividers,
    title: 'Components/Dividers',
    //Definition of the available args for the component
    argTypes: {
        align: {
            control: { type: "select"},
            options: ["center", "left"],
            table: {
                disable: true,
            }
        },
        color: {
            control: { type: "select"},
            options: ["bg-tertiary-blue-xhigh", "bg-tertiary-dark-blue-xlow"]
        },
        element: {
            control: { type: "select" },
            options: ["avatar", "badge", "icon", "text"]
        }
    },
};

export default meta;
type Story = StoryObj<typeof Dividers>;

const variants = {
    center: {
        avatar: DividersCenterAvatar,
        badge: DividersCenterBadge,
        icon: DividersCenterIcon,
        text: DividersCenterText,
    },
    left: {
        avatar: DividersLeftAvatar,
        badge: DividersLeftBadge,
        icon: DividersLeftIcon,
        text: DividersLeftText,
    }
};
// Token replacement in html file depending of selected args.
const Template = ({ align, color, element }) => {

    let component = variants[align][element];
    // Replace the placeholder with the provided color
    return component.replace(/\$\{color\}/g, color);
};


// Rendering of different variants of the component.
export const Centre = Template.bind({});
Centre.args = {
    align: "center",
    color: "bg-tertiary-blue-xhigh",
    element: "avatar"
};

export const Left = Template.bind({});
Left.args = {
    color: "bg-tertiary-blue-xhigh",
    align: "left",
    element: "avatar"
};