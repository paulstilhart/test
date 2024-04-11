import { StoryObj, Meta } from '@storybook/html';
// Input base
import InputBaseHtml from "./html/input-field-base/input-field-base.html";
import InputBaseIconLeftHtml from "./html/input-field-base/input-field-base--icon-left.html";
import InputBaseIconRightHtml from "./html/input-field-base/input-field-base--icon-right.html";
import InputBaseIconstHtml from "./html/input-field-base/input-field-base--icons.html";

// Input date
import InputDateHtml from "./html/input-field-date/input-field-date.html";
import InputPasswordHtml from "./html/input-field-password/input-field-password.html";
import InputPhoneHtml from "./html/input-field-phone/input-field-phone.html";
import InputSelectHtml from "./html/input-field-select/input-field-select.html";

import { useEffect } from '@storybook/client-api';
import Datepicker from 'flowbite-datepicker/Datepicker';
import '../../../assets/js/drt-dropdown/dropdown-autocomplete.js';
import {initDropdowns, initFlowbite} from "flowbite";



let Inputs;

const meta: Meta<typeof Inputs> = {
    component: Inputs,
    title: 'Components/Forms/Inputs',
    //Definition of the available args for the component
    argTypes: {
        variant: {
            control: { type: "select"},
            options: [
                "base",
                "date",
                "password",
                "select",
                'phone'
            ],
            table : {
                disable: true,
            }
        },
        label: {
            control: { type: "text"},
        },
        helperText: {
            control: { type: "text"},
        },
        ShowHelperText: {
            control: { type: "boolean"},
        },
        ShowIconLeft: {
            control: { type: "boolean"},
        },
        ShowIconRight: {
            control: { type: "boolean"},
        },

        state: {
            control: {type: "select"},
            options: [
                "initial",
                "disabled",
                "enabled",
                "valid",
                "invalid",
            ]
        }


    },
};

export default meta;
type Story = StoryObj<typeof Inputs>;


const variants = {
    "base" :  InputBaseHtml,
    "date" :  InputDateHtml,
    "password": InputPasswordHtml,
    "select": InputSelectHtml,
    'phone' :InputPhoneHtml
}

// Token replacement in html file depending of selected args.
const TemplateInput = ({ variant = "base",
                         label,
                         ShowIconLeft = true,
                         ShowIconRight = true,
                         state='initial',
                         helperText = "Helper text",
                         ShowHelperText = true
                       }) => {
    let component = variants[variant];
    if (variant == "base" ) {
        if (ShowIconLeft && !ShowIconRight) {
            component = InputBaseIconLeftHtml;
        }
        if (!ShowIconLeft && ShowIconRight) {
            component = InputBaseIconRightHtml;
        }
        if (ShowIconLeft && ShowIconRight) {
            component = InputBaseIconstHtml;
        }
    }

    component = component.replace(/\$\{label\}/g, label)
    let helperDom = " <p id=\"floating_helper_text\" class=\"peer-[.invalid]/form-element:text-error-stroke-md body-s font-mono text-neutral-text-xhigh\">" + helperText + "</p>";
    if (ShowHelperText) {
        component = component.replace(/\$\{helperText\}/g, helperDom)
    } else {
        component = component.replace(/\$\{helperText\}/g, '')
    }
    component = component.replace(/\$\{state\}/g, state)
    useEffect(() => {
        if (variant === "select") {
            initDropdowns();
        }
        if (variant === "date") {
            // Sélectionner l'élément pour le datepicker
            const dateElement = document.querySelector('#floating_outlined');

            // Initialiser une nouvelle instance du Datepicker
          const datePickerInstance = new Datepicker(dateElement, {
              todayBtn: true,
              clearBtn: true,
              todayHighlight: true,
              pickLevel: 0,
            });

            // Nettoyage
            return () => {
                if (datePickerInstance) {
                    datePickerInstance.destroy();
                }
            };
        }
    }, [variant, label, ShowIconLeft, ShowIconRight, state, helperText, ShowHelperText]); // Inclure toutes les props pertinentes
   return component;

};


// Rendering of different variants of the component.
export const Base = TemplateInput.bind({});
Base.args = {
    variant : 'base',
    label : 'Téléphone',
    ShowHelperText: true,
    ShowIconLeft: true,
    ShowIconRight: true,
    helperText: "Helper text",
    state: 'initial'
};

export const Date = TemplateInput.bind({});
Date.argTypes = {
    ShowIconRight: {
        table : {
            disable: true,
        }
    },
    ShowIconLeft: {
        table : {
            disable: true,
        }
    }
}
Date.args = {
    variant : 'date',
    label : 'Date',
    ShowHelperText: true,
    ShowIconLeft: false,
    ShowIconRight: true,
    helperText: "Helper text",
    state: 'initial'
};

export const Password = TemplateInput.bind({});
Password.argTypes = {
    ShowIconRight: {
            table : {
            disable: true,
        }
    },
    ShowIconLeft: {
        table : {
            disable: true,
        }
    }
}
Password.args = {
    variant : 'password',
    label : 'Password',
    ShowHelperText: true,
    ShowIconLeft: false,
    ShowIconRight: true,
    helperText: "Helper text",
    state: 'initial'
};

export const Select = TemplateInput.bind({});
Select.argTypes = {
    ShowIconRight: {
        table : {
            disable: true,
        }
    },
    ShowIconLeft: {
        table : {
            disable: true,
        }
    }
}
Select.args = {
    variant : 'select',
    label : 'Select',
    ShowHelperText: true,
    ShowIconLeft: false,
    ShowIconRight: true,
    helperText: "Helper text",
    state: 'initial'
};

export const Phone = TemplateInput.bind({});
Phone.argTypes = {
    ShowIconRight: {
        table : {
            disable: true,
        }
    },
    ShowIconLeft: {
        table : {
            disable: true,
        }
    }
}
Phone.args = {
    variant : 'phone',
    label : 'Téléphone',
    ShowHelperText: true,
    ShowIconLeft: false,
    ShowIconRight: true,
    helperText: "Helper text",
    state: 'initial'
};