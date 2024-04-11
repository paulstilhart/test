import { StoryObj, Meta } from '@storybook/html';
import Popovers from "./html/popover.html";
import { useEffect } from '@storybook/client-api';
import {initModals, initPopovers} from 'flowbite';
let Popover;

const meta: Meta<typeof Popover> = {
    component: Popover,
    title: 'Components/Popover',
    //Definition of the available args for the component
    argTypes: {
        label: {control : {type: "text"}}
    },
};

export default meta;
type Story = StoryObj<typeof Popover>;



// Token replacement in html file depending of selected args.
const Template = ({ label }) => {
    let component = Popovers;
    useEffect(() => {
        // Initialize new modals
        initPopovers();

    }, [label]);

    component = component.replace(/\$\{label\}/g, label);
    // Replace a placeholder in your HTML string with the label
    return component;
};

// Rendering of different variants of the component.
export const Default = Template.bind({});
Default.args = {
    label: "Ces professionnels pratiquent le tiers payant (pas d’avance de frais) et vous permettent de bénéficier de prestations à des tarifs préférentiels sur le dentaire, optique, audioprothèses et médecines douces. Pour plus d’information, accédez directement à la <a href=''>plateforme Itelis</a>."
}


