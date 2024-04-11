import { StoryObj, Meta } from '@storybook/html';
import FileUploadHtml from "./html/file-upload.html";

const meta: Meta<typeof FileUpload> = {
    component: FileUploadHtml,
    title: 'Components/Forms/File upload',
    //Definition of the available args for the component
    argTypes: {
        label: {
            control: { type: "text"},
        },
        state: {
            control: { type: "select"},
            options: [
                "loading",
                "valid",
                "invalid",
            ]
        },
        showHelperText: {
            control: { type: "boolean"},
        },
        helperText: {
            control: { type: "text"},
        },

    },
};

export default meta;
type Story = StoryObj<typeof FileUpload>;

// Token replacement in html file depending of selected args.
const Template = ({ label, showHelperText = true, helperText, state}) => {
    let component = FileUploadHtml;
    let helperDom = " <p id=\"floating_helper_text\" class=\"peer-[.invalid]/form-element:text-error-stroke-md body-s font-mono text-neutral-text-xhigh\">" + helperText + "</p>";
    component = component.replace(/\$\{state\}/g, state)
        .replace(/\$\{label\}/g, label);


    if (showHelperText) {
        component = component.replace(/\$\{helperText\}/g, helperDom)
    } else {
        component = component.replace(/\$\{helperText\}/g, '')
    }

    return component;
};


// Rendering of different variants of the component.
export const FileUpload = Template.bind({});
FileUpload.args = {
    label: "NomFichier.png",
    state: 'valid',
    showHelperText: true,
    helperText: "Helper text",

}
