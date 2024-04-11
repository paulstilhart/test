import { StoryObj, Meta } from '@storybook/html';
import {TemplatePager} from "./templates/paginationTemplate";
let Pager;
const meta: Meta<typeof Pager> = {
    component: Pager,
    title: 'Components/Buttons/Pagination',
    //Definition of the available args for the component
    argTypes: {
        color: {
            control: { type: "select"},
            options: [
                "primary",
                "secondary",
                "tertiary",
            ]
        },
        buttonTextLeft : {
            control : {type: "text"}
        },
        buttonTextRight : {
            control : {type: "text"}
        }


    },
};

export default meta;
type Story = StoryObj<typeof Pager>;

// Rendering of different variants of the component.
export const Default = TemplatePager.bind({});
Default.args = {
    color: 'primary',
    buttonTextLeft: "Précédent",
    buttonTextRight: "Suivant"
};
