import { StoryObj, Meta } from '@storybook/html';
import Avatar from "./html/avatars.html";



const meta: Meta<typeof Avatar> = {
    component: Avatar,
    title: 'Components/Avatars',
    //Definition of the available args for the component
    argTypes: {
        borderColor: {
            control: { type: "select"},
            options: [ "primary", "secondary", "success"]
        },

        size: {
            control: { type: "select"},
            options : [ "xs", "sm", "md", "lg", "xl"],
        },

    },
};


export default meta;
type Story = StoryObj<typeof Avatar>;


// Token replacement in html file depending of selected args.
const Template = ({ borderColor, size }) => {
    // Replace a placeholder in your HTML string with the label
    let component = Avatar;
    component = component.replace(/\$\{color\}/g, borderColor);
    component = component.replace(/\$\{size\}/g, size);

    return component;
};

// Rendering of different variants of the component.
export const Default = Template.bind({});
Default.args = {
    borderColor: 'primary',
    size: 'sm',
};
