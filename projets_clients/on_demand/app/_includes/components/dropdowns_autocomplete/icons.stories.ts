import { StoryObj, Meta } from '@storybook/html';
import AutocompleteHTML from "./html/dropdown-autocomplete.html";
import Arrow from "./html/dropdown-chevron.html";


const meta: Meta<typeof AutocompleteHTML> = {
    component: AutocompleteHTML,
    title: 'Components/Dropdown',
    //Definition of the available args for the component
    argTypes: {
        label: {
            control: { type: "text"}
        },
        hideArrow: {
            control: { type: "boolean"}
        },
    },
};


export default meta;
type Story = StoryObj<typeof AutocompleteHTML>;


// Token replacement in html file depending of selected args.
const Template = ({ label, hideArrow = false}) => {
    // Replace a placeholder in your HTML string with the label
    let component = AutocompleteHTML;
    let arrowComponent = Arrow;
    if (hideArrow) {
        arrowComponent = '';
    }
    return component.replace(/\$\{label\}/g, label).replace(/\$\{arrow\}/g, arrowComponent);

};

// Rendering of different variants of the component.
export const Icons = Template.bind({});
Icons.args = {
    label: "Lorem&nbsp;<strong>ipsum</strong>",
    hideArrow: false

}