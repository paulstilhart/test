import { StoryObj, Meta } from '@storybook/html';
import Breadcrumb from "./html/breadcrumb.html";

const meta: Meta<typeof Breadcrumb> = {
    component: Breadcrumb,
    title: 'Components/Breadcrumb',
    //Definition of the available args for the component
    argTypes: {
        item_1 : {
            control: { type: "text"},
        },
        item_2 : {
            control: { type: "text"},
        },
        item_3 : {
            control: { type: "text"},
        },
    },
};

export default meta;
type Story = StoryObj<typeof Breadcrumb>;


// Token replacement in html file depending of selected args.
const Template = ({item_1, item_2, item_3 }) => {
    // Replace a placeholder in your HTML string with the label
    let component = Breadcrumb
    component = component.replace(/\$\{item_1\}/g, item_1);
    component = component.replace(/\$\{item_2\}/g, item_2);
    component = component.replace(/\$\{item_3\}/g, item_3);
    return component
};

// Rendering of different variants of the component.
export const Default = Template.bind({});
Default.args = {
    item_1: 'Item 1',
    item_2: 'Item 2',
    item_3: 'Item 3',

};
