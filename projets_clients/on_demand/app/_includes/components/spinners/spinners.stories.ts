import {Meta, StoryObj} from '@storybook/html';
// @ts-ignore
import Spinners from "./html/spinners.html";

const meta: Meta<typeof Spinners> = {
    component: Spinners,
    title: 'Components/Spinners',
    //Definition of the available args for the component
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Spinners>;

// Token replacement in html file depending of selected args.
const Template = ({}) => {
    // Replace a placeholder in your HTML string with the label
    return Spinners;
};

// Rendering of different variants of the component.
export const Default = Template.bind({});

