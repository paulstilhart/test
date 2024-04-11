import { StoryObj, Meta } from '@storybook/html';
// import FileUpload from "./html/file-upload.html";
import UploadFieldHtml from "./html/upload-field.html";

const meta: Meta<typeof FileUpload> = {
    component: UploadFieldHtml,
    title: 'Components/Forms/File upload',
    //Definition of the available args for the component
    argTypes: {
        description: {
            control: { type: "text"},
        },
        description_2: {
            control: { type: "text"},
        },
        informations: {
            control: { type: "text"},
        },
        invalid: {
            control: { type: "boolean"},
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
const Template = ({ showHelperText = true, description, description_2, helperText,informations, invalid = false }) => {
    let component = UploadFieldHtml;
    let helperDom = " <p id=\"dropzone_file_text\" class=\"peer-[.invalid]/form-element:text-error-stroke-md body-s font-mono text-neutral-text-xhigh self-start\">" + helperText + "</p>";
    component = component.replace(/\$\{description\}/g, description)
        .replace(/\$\{description_2\}/g, description_2)
        .replace(/\$\{informations\}/g, informations);

    if (showHelperText) {
        component = component.replace(/\$\{helperText\}/g, helperDom)
    } else {
        component = component.replace(/\$\{helperText\}/g, '')
    }

    if (invalid) {
        component = component.replace(/\$\{state\}/g, "invalid");
    }
    component = component.replace()
    return component;
};


// Rendering of different variants of the component.
export const UploadField = Template.bind({});
UploadField.args = {
    description: "Glissez-Déposez vos documents ici",
    description_2: "ou parcourez vos fichiers",
    informations: "Formats autorisés : jpg, png, pdf.<br> Poids maximum : 4mo",
    invalid: false,
    showHelperText: true,
    helperText: "Helper text",

}
