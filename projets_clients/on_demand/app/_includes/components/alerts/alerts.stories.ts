import { StoryObj, Meta } from '@storybook/html';
import Alert from "./html/alert-base.html";
import AlertDefaultHtml from "./html/alert-default.html";
import AlertErrorHtml from "./html/alert-error.html";
import AlertInformationHtml from "./html/alert-information.html";
import AlertMaintenanceHtml from "./html/alert-maintenance.html";
import AlertSuccessHtml from "./html/alert-success.html";
import AlertTraitementHtml from "./html/alert-traitement.html";
import AlertWarningtHtml from "./html/alert-warning.html";

// Without buttons

import AlertText from "./html/alert-base--text.html";
import AlertDefaultTextHtml from "./html/alert-default--text.html";
import AlertErrorTextHtml from "./html/alert-error--text.html";
import AlertInformationTextHtml from "./html/alert-information--text.html";
import AlertMaintenanceTextHtml from "./html/alert-maintenance--text.html";
import AlertSuccessTextHtml from "./html/alert-success--text.html";
import AlertTraitementTextHtml from "./html/alert-traitement--text.html";
import AlertWarningtTextHtml from "./html/alert-warning--text.html";


const meta: Meta<typeof Alert> = {
    component: Alert,
    title: 'Components/Alert',
    //Definition of the available args for the component
    argTypes: {
        text: {
            control: { type: "text"},
        },
        textButton: {
            control: { type: "text"},
        },
        showButton: {
            control: { type: "boolean"},
        },
        format: {
            table: {
              disable: true,
            },
            control: { type: "select"},
            options: [
                "base",
                "default",
                "error",
                "information",
                "maintenance",
                "success",
                "traitement",
                "warning"
            ],
        },
    },
};

export default meta;
type Story = StoryObj<typeof Alert>;

const formats = {
    base : {
        'button': Alert,
        'nobutton': AlertText
    },
    default : {
        'button': AlertDefaultHtml,
        'nobutton': AlertDefaultTextHtml
    },
    error : {
        'button': AlertErrorHtml,
        'nobutton': AlertErrorTextHtml
    },
    information: {
        'button': AlertInformationHtml,
        'nobutton': AlertInformationTextHtml
    },
    maintenance: {
        'button': AlertMaintenanceHtml,
        'nobutton': AlertMaintenanceTextHtml
    },
    success: {
        'button': AlertSuccessHtml,
        'nobutton': AlertSuccessTextHtml
    },
    traitement :  {
        'button': AlertTraitementHtml,
        'nobutton': AlertTraitementTextHtml
    },
    warning: {
        'button': AlertWarningtHtml,
        'nobutton': AlertWarningtTextHtml
    }
}

const addCloseButtonScript = (component) => {
    const script = `<script>
        document.addEventListener('DOMContentLoaded', function() {
            const closeButton = document.querySelector('[data-dismiss-target]');
            if (closeButton) {
                closeButton.addEventListener('click', function() {
                    const targetSelector = this.getAttribute('data-dismiss-target');
                    const targetElement = document.querySelector(targetSelector);
                    if (targetElement) {
                        targetElement.style.display = 'none'; // or targetElement.remove(); to remove it from DOM
                    }
                });
            }
        });
    </script>`;
    return component + script;
};
// Token replacement in html file depending of selected args.
const Template = ({ format = "base", text, textButton, showButton = true }) => {
    // Replace a placeholder in your HTML string with the label
    let component = formats[format]['nobutton'];

    if (showButton) {
        component = formats[format]['button'];
        component = component.replace(/\$\{textButton\}/g, textButton);
    }

    component = component.replace(/\$\{text\}/g, text);

    component = addCloseButtonScript(component);
    return component;
};


// Rendering of different variants of the component.
export const Default = Template.bind({});
Default.args = {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
    showButton : true,
    textButton: 'Button text',
    format: 'default',
};
export const Base = Template.bind({});
Base.args = {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
    showButton : true,
    textButton: 'Button text',
    format: 'base',
};

export const Error = Template.bind({});
Error.args = {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
    showButton : true,
    textButton: 'Button text',
    format: 'error',
};

export const Information = Template.bind({});
Information.args = {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
    showButton : true,
    textButton: 'Button text',
    format: 'information',
};

export const Maintenance = Template.bind({});
Maintenance.args = {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
    showButton : true,
    textButton: 'Button text',
    format: 'maintenance',
};

export const Success = Template.bind({});
Success.args = {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
    showButton : true,
    textButton: 'Button text',
    format: 'success',
};

export const traitement = Template.bind({});
traitement.args = {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
    showButton : true,
    textButton: 'Button text',
    format: 'traitement',
};

export const warning = Template.bind({});
warning.args = {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
    showButton : true,
    textButton: 'Button text',
    format: 'warning',
};