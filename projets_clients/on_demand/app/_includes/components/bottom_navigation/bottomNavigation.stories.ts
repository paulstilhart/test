import { StoryObj, Meta } from '@storybook/html';
import BottomNavigation from "./html/bottom-navigation--horizontal.html";
import BottomNavigationVertical from "./html/bottom-navigation--vertical.html";


const meta: Meta<typeof BottomNavigation> = {
    component: BottomNavigation,
    title: 'Components/Bottom navigation',
    //Definition of the available args for the component
    argTypes: {
        format: {
            table: {
                disable: true,
            },
            control: { type: "select"},
            options: [
                "horizontal",
                "vertical"
            ],
        },

        item_1 : { control: { type: "text"},},
        item_2 : { control: { type: "text"},},
        item_3 : { control: { type: "text"},},
        item_4 : { control: { type: "text"},},
    },
};

export default meta;
type Story = StoryObj<typeof BottomNavigation>;

const formats = {
    horizontal: BottomNavigation,
    vertical: BottomNavigationVertical,
}
// Token replacement in html file depending of selected args.
const Template = ({
                      format = "horizontal",
                      item_1 = "Devis",
                      item_2 = "Téléphone",
                      item_3 = "Contact",
                      item_4 = "Agences" ,

                  }) => {
    let component;
    component = formats[format];
    // Replace a placeholder in your HTML string with the label
    component = component.replace(/\$\{item_1\}/g, item_1);
    component = component.replace(/\$\{item_2\}/g, item_2);
    component = component.replace(/\$\{item_3\}/g, item_3);
    component = component.replace(/\$\{item_4\}/g, item_4);
   return component;
};

// Rendering of different variants of the component.
export const Horizontal = Template.bind({});
Horizontal.args = {
    format: 'horizontal',
    item_1 : "Devis",
    item_2 : "Téléphone",
    item_3 : "Contact",
    item_4 : "Agences" ,

};

export const Vertical = Template.bind({});
Vertical.argTypes = {
    item_4: {
        table: { disable: true },
    }
}
Vertical.args = {
    format: 'vertical',
    item_1 : "Téléphone",
    item_2 : "Contact",
    item_3 : "Agences"
};
