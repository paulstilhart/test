import { StoryObj, Meta } from '@storybook/html';
import {TemplateSelectionControl} from "./templates/selection_contorlsTemplate";

let SelectionControls;

const meta: Meta<typeof SelectionControls> = {
    component: SelectionControls,
    title: 'Components/Forms/Selection controls',
    //Definition of the available args for the component
    argTypes: {
        variant : {
            control : {type : "select"},
            options: ["checkbox", "radio", "toggle"],
            table: {
                disable: true,
            }
        },
        label : {
            control : {type : "text"},
        },
        inputOnly: {
            control : {type : "boolean"},
        },
        description : {
            control : {type : "text"},
        },
        hideBackground : {
            control : {type : "boolean"},
        },
        hideDescription : {
            control : {type : "boolean"},
        },
        state : {
            control : {type : "select"},
            options: ["default", "disabled", "disabled checked", "checked", "invalid"],
        }
    },
};

export default meta;
type Story = StoryObj<typeof SelectionControls>;


// Rendering of different variants of the component.
export const Checkbox = TemplateSelectionControl.bind({});
Checkbox.args = {
    variant: 'checkbox',
    label : 'Write label text here',
    inputOnly: false,
    description: "Some helper text",
    hideBackground: false,
    hideDescription: false,
    state: 'default'
}
export const Radio = TemplateSelectionControl.bind({});
Radio.argTypes = {
    isRadioButton : {
        control : {type : "boolean"},
    },
}
Radio.args = {
    variant: 'radio',
    label : 'Write label text here',
    inputOnly: false,
    isRadioButton : false,
    description: "Some helper text",
    hideBackground: false,
    hideDescription: false,
    state: 'default'
}
export const Toggle = TemplateSelectionControl.bind({});
Toggle.args = {
    variant: 'toggle',
    label : 'Write label text here',
    inputOnly: false,
    description: "Some helper text",
    hideBackground: false,
    hideDescription: false,
    state: 'default'
}