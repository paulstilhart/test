import { StoryObj, Meta } from '@storybook/html';
import Modals from "./html/modal--center.html";
import ModalsLeft from "./html/modal--left.html";
import { useEffect } from '@storybook/client-api';
import {initModals, Modal} from "flowbite";

const meta: Meta<typeof Modals> = {
    component: Modals,
    title: 'Components/Modals',
    //Definition of the available args for the component
    argTypes: {
        buttonText : {
            control: { type: "text"}
        },
        title : {
            control: { type: "text"}
        },
        description_1 : {
            control: { type: "text"}
        },
        description_2 : {
            control: { type: "text"}
        },
        button_text_1 : {
            control: { type: "text"}
        },
        button_text_2 : {
            control: { type: "text"}
        },
        align: {
            control: { type: "select"},
            options: ["center", "left"],
            table: {
                disable: true,
            }
        },
    },
};

export default meta;
type Story = StoryObj<typeof Modals>;

const variants = {
    center: Modals,
    left: ModalsLeft
};

// Token replacement in html file depending of selected args.
const Template = ({
                      align = "center",
                      buttonText,
                      title,
                      description_1,
                      description_2,
                      button_text_1,
                      button_text_2
                  }) => {
    let component = variants[align];
    useEffect(() => {
        // Initialize new modals
        initModals();
        return () => {
            const existingBackdrops = document.querySelectorAll('[modal-backdrop]'); // Select all backdrops
            existingBackdrops.forEach(backdrop => {
                backdrop.style.display = 'none'; // Hide each backdrop
            });
        };
    }, [align,buttonText, title, description_1, description_2, button_text_1,button_text_2 ]);

    component = component.replace(/\$\{buttonText\}/g, buttonText)
                .replace(/\$\{title\}/g, title)
                .replace(/\$\{description_1\}/g, description_1)
                .replace(/\$\{description_2\}/g, description_2)
                .replace(/\$\{button_text_1\}/g, button_text_1)
                .replace(/\$\{button_text_2\}/g, button_text_2);
    return component;
};


// Rendering of different variants of the component.
export const Center = Template.bind({});
Center.args = {
    align: "center",
    buttonText: "Toggle Modal Center",
    title: "Êtes-vous sûr(e) de vouloir supprimer &lt;Prénom&gt; ?",
    description_1: "En cliquant sur “Confirmer”, vous serez redirigé vers le formulaire de demande.",
    description_2: "Si vous souhaitez annuler cette action, cliquez sur “ Annuler ”.",
    button_text_1: "Je refuse",
    button_text_2: "J’accepte"
};

export const Left = Template.bind({});
Left.argTypes = {
    description_2: {
        table: {
            disable: true,
        }
    }
};
Left.args = {
    align: "left",
    buttonText: "Toggle Modal Left",
    title: "Politique de service",
    description_1: 'consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?\"\n',
    button_text_1: "Je refuse",
    button_text_2: "J’accepte"
};