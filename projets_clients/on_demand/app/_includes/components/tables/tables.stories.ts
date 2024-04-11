import { StoryObj, Meta } from '@storybook/html';
import Tables from "./html/tables--echeance.html";
import TablesHonorairesHtml from "./html/tables--honoraires.html";
import TablesHorairesHtml from "./html/tables--horaires.html";
import {Vertical} from "../bottom_navigation/bottomNavigation.stories";

const meta: Meta<typeof Tables> = {
    component: Tables,
    title: 'Components/Tables',
    //Definition of the available args for the component
    argTypes: {
        variant: {
            control: { type: "select"},
            options: ["echeance", "honoraires", "horaires"],
            table: {
                disable: true,
            }
        },
        headerTextSize: {
            control: { type: "select"},
            options: ["body-xl", "body-m-bold"]
        },
        contentTextSize: {
            control: { type: "select"},
            options: ["body-s", "body-m"]
        },
        cellSpacing: {
            control: { type: "select" },
            options: ["table-cell-spacing-sm", "table-cell-spacing-md"]
        }
    },
};


export default meta;
type Story = StoryObj<typeof Tables>;

// Token replacement in html file depending of selected args.
const variants = {
    echeance: Tables,
    honoraires: TablesHonorairesHtml,
    horaires: TablesHorairesHtml
}
const Template = ({ variant, headerTextSize, contentTextSize, cellSpacing }) => {
    let component = variants[variant]; // Default to Dividers


    // Replace the placeholder with the provided color
    component = component.replace(/\$\{headerTextSize\}/g, headerTextSize);
    component = component.replace(/\$\{contentTextSize\}/g, contentTextSize);
    component = component.replace(/\$\{cellSpacing\}/g, cellSpacing);
    return component;
};


// Rendering of different variants of the component.
export const Echeance = Template.bind({});
Echeance.args = {
    variant: 'echeance',
    headerTextSize: 'body-xl',
    contentTextSize: 'body-s',
    cellSpacing: "table-cell-spacing-sm"
};

export const Honoraire = Template.bind({});
Honoraire.args = {
    variant: 'honoraires',
    headerTextSize: 'body-xl',
    contentTextSize: 'body-s',
    cellSpacing: "table-cell-spacing-sm"
};

export const Horaire = Template.bind({});
Horaire.argTypes = {
    headerTextSize: {
        table: { disable: true },
    }
}
Horaire.args = {
    variant: 'horaires',
    contentTextSize: 'body-s',
    cellSpacing: "table-cell-spacing-sm"
};