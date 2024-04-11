import { StoryObj, Meta } from '@storybook/html';
import Stepper from "./html/stepper.html";

const meta: Meta<typeof Stepper> = {
    component: Stepper,
    title: 'Components/Stepper',
    //Definition of the available args for the component
    argTypes: {
    },
};

export default meta;
type Story = StoryObj<typeof Stepper>;


// Token replacement in html file depending of selected args.
const Template = ({ }) => {
    // Replace a placeholder in your HTML string with the label
    return Stepper
}

// Rendering of different variants of the component.
export const Default = Template.bind({});

