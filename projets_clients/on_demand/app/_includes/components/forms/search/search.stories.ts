import { StoryObj, Meta } from '@storybook/html';
import Search from "./html/search.html";

const meta: Meta<typeof Search> = {
    component: Search,
    title: 'Components/Forms/Search',
    //Definition of the available args for the component
    argTypes: {
        color: {
            control: { type: "select"},
            options: [
                "primary",
                "secondary",
                "tertiary",
            ],
        },
    },
};

export default meta;
type Story = StoryObj<typeof Search>;

// Token replacement in html file depending of selected args.
const Template = ({ color = "primary" }) => {
    let component = Search;
    component = component.replace(/\$\{color\}/g, color);
    return component;
};

// Rendering of different variants of the component.
export const Default = Template.bind({});
Default.args = {
    color: 'primary',
};
