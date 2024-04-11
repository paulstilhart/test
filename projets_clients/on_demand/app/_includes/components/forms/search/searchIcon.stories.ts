import { StoryObj, Meta } from '@storybook/html';
import SearchIcon from "./html/search--icons.html";

const meta: Meta<typeof SearchIcon> = {
    component: SearchIcon,
    title: 'Components/Forms/Search Icon',
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
type Story = StoryObj<typeof SearchIcon>;

// Token replacement in html file depending of selected args.
const Template = ({ color = "primary", size ="base" }) => {
    let component = SearchIcon;
    component = component.replace(/\$\{color\}/g, color);
    return component;
};

// Rendering of different variants of the component.
export const Default = Template.bind({});
Default.args = {
    color: 'primary',
};
