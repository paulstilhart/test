import { StoryObj, Meta } from '@storybook/html';
import Accordion from "./html/accordion-faq.html";
import AccordionHeader from "./html/accordion-header-base.html";
import { useEffect } from '@storybook/client-api';
import {initAccordions} from "flowbite";

const meta: Meta<typeof Accordion> = {
    component: Accordion,
    title: 'Components/Accordion',
    //Definition of the available args for the component
    argTypes: {
        variant: {
            control: { type: "select" },
            options : [ "accordion", "header "],
            table: {
                disable: true,
            }
        },
        headerTextItem_1: {
            control: { type: "text" }
        },
        descriptionItem_1: {
            control: { type: "text" }
        },
        headerTextItem_2: {
            control: { type: "text" }
        },
        descriptionItem_2: {
            control: { type: "text" }
        }
    },
};

const variants = {
    'accordion': Accordion,
     'header' : AccordionHeader,
}

export default meta;
type Story = StoryObj<typeof Accordion>;


// Token replacement in html file depending of selected args.
const Template = ({
                      variant = "accordion",
                      headerTextItem_1 = "Title text 1",
                      descriptionItem_1 = "Text Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dictum justo et risus tinc\",\n",
                      descriptionItem_2 = "Title text 1",
                      headerTextItem_2 = "Text Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dictum justo et risus tinc\",\n",

                  }) => {

    // Replace a placeholder in your HTML string with the label
    let component = variants[variant];;
    useEffect(() => {
        // Initialize new modals
        initAccordions();
    }, [headerTextItem_1,descriptionItem_1, descriptionItem_2, headerTextItem_2]);

    component = component.replace(/\$\{headerTextItem_1\}/g, headerTextItem_1);
    component = component.replace(/\$\{descriptionItem_1\}/g, descriptionItem_1);
    component = component.replace(/\$\{headerTextItem_2\}/g, headerTextItem_2);
    component = component.replace(/\$\{descriptionItem_2\}/g, descriptionItem_2);
    return component;
};

// Rendering of different variants of the component.
export const Default = Template.bind({});
Default.args = {
    variant: 'accordion',
    headerTextItem_1: "Title text 1",
    descriptionItem_1: "Text Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dictum justo et risus tinc",
    headerTextItem_2: "Title text 2",
    descriptionItem_2: "Text Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dictum justo et risus tinc",
};

