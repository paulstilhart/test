import { StoryObj, Meta } from '@storybook/html';
import Textarea from "./html/textarea.html";
import TextareaHelper from "./html/textarea--helper.html";

const meta: Meta<typeof Textarea> = {
    component: Textarea,
    title: 'Components/Forms/Textarea',
    //Definition of the available args for the component
    argTypes: {
        label: {
            controls: {type: "text"}
        },
        text: {
            controls: {type: "text"}
        },
        showHelperText: {
            controls: {type: "boolean"}
        },
        helpText: {
            controls: {type: "text"}
        }
    },
};

export default meta;
type Story = StoryObj<typeof Textarea>;



// Token replacement in html file depending of selected args.
const Template = ({label, text, showHelperText = true, helpText}) => {
    let component = Textarea;
    if (showHelperText) {
        component = TextareaHelper;
        component = component.replace(/\$\{helpText\}/g, helpText);
    }
    component = component.replace(/\$\{label\}/g,label).replace(/\$\{text\}/g,text);;
    return component
};


// Rendering of different variants of the component.
export const Default = Template.bind({});
Default.args = {
    label: "Textarea",
    text: "",
    showHelperText: true,
    helpText: "helper text"
}