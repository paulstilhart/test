import { StoryObj, Meta } from '@storybook/html';
import Datepickers from "./html/datepicker.html";
import RangeDatepickers from "./html/range-datepicker.html";
import Datepicker from 'flowbite-datepicker/Datepicker';
import DateRangePicker from 'flowbite-datepicker/DateRangePicker';
import fr from "./local/fr.js";

Object.assign(Datepicker.locales, fr);


import { useEffect } from '@storybook/client-api';
import {initFlowbite} from "flowbite";

let levels: string[] = ["simple", "months", "year", "range"];
const meta: Meta<typeof Datepicker> = {
    component: Datepicker,
    title: 'Components/Datepicker',
    //Definition of the available args for the component
    argTypes: {
        variant: {
            control: { type: "select"},
            options: levels,
            table: {
                disable: true
            }
        },
        startDateLabel: {
            control: { type: "text"}
        }
    },
};


export default meta;
type Story = StoryObj<typeof Datepickers>;

// Token replacement in html file depending of selected args.
const Template = ({variant, startDateLabel, endDateLabel}) => {
    let component = Datepickers;
    let id = "datePicker--" + variant;
    if (variant == "range") {
        component = RangeDatepickers;
        component = component.replace(/\$\{label_end_date\}/g, endDateLabel);
    }
    component = component.replace(/\$\{id\}/g, id).replace(/\$\{label_start_date\}/g, startDateLabel);
    let indice = levels.indexOf(variant);
    const datePickerInstance = '';
    useEffect(() => {
        // Query for the element and initialize DateRangePicker
            if (variant == "range") {
                const dateRangeElement = document.querySelector('#dateRangePicker');
                const rangeDatePickerInstance =  new DateRangePicker(dateRangeElement, {
                    todayBtn: true,
                    clearBtn: true,
                    todayHighlight: true,
                    pickLevel: 0,
                    autohide: true,
                    language: 'fr',
                    locale: fr,
                    weekStart: 1,

                });
                return () => {
                    if (rangeDatePickerInstance ) {
                        rangeDatePickerInstance.destroy();
                    }
                };
            } else {
                const dateElement = document.querySelector('#' + id);
                const datePickerInstance = new Datepicker(dateElement, {
                    todayBtn: true,
                    clearBtn: true,
                    todayHighlight: true,
                    pickLevel: indice,
                    language: 'fr',
                    weekStart: 1,
                    // Set Monday as the first day of the week
                });
                return () => {
                    if (datePickerInstance ) {
                        datePickerInstance.destroy();
                    }
                };
            }



    }, []);

    // Return the HTML content for rendering
    return component;
};

// Rendering of different variants of the component.
export const Simple = Template.bind({});
Simple.args = {
    variant: "simple",
    startDateLabel: "Sélectionner une date"
}

export const Months = Template.bind({});
Months.args = {
    variant: "months",
    startDateLabel: "Sélectionner une date"
}

export const Years = Template.bind({});
Years.args = {
    variant: "year",
    startDateLabel: "Sélectionner une date"
}

export const Range = Template.bind({});
Range.argTypes = {
    endDateLabel : {
        control : {type : "text"},
    },
}
Range.args = {
    variant: "range",
    startDateLabel: "Sélectionner une date",
    endDateLabel: "Sélectionner une date"
}