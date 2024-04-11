import { StoryObj, Meta } from '@storybook/html';
import IconShape from "./html/icon-shapes--light.html";
import IconShapeDarkHtml from "./html/icon-shapes--dark.html";


const meta: Meta<typeof IconShape> = {
    component: IconShape,
    title: 'Components/Icon Shape',
    //Definition of the available args for the component
    argTypes: {
        color: {
          control: {type: "select"},
          options: [
            "primary" ,
            "secondary",
            "tertiary" ,
            "neutral"
          ],
        },
        format: {
          control: { type: "select" },
          options: ["border-radius-xs", "rounded-full"]
        },
        size: {
            control: { type: "select"},
            options: [
                "xs",
                "sm",
                "base",
                "lg",
                "xl",
            ],
        },
        variant: {
            table: {
                disable: true,
            },
            control: {type: "select"},
            options: [
                "dark",
                "light"
            ],
        },
    },
};

export default meta;
type Story = StoryObj<typeof IconShape>;

const variants = {
    light : IconShape,
    dark : IconShapeDarkHtml
}

const colors = {
    dark: {
        primary : "bg-primary-surface-md",
        secondary: "bg-secondary-surface-md",
        tertiary: "bg-tertiary-blue-xhigh",
        neutral: "bg-neutral-surface-md"
    },
   light: {
       primary : "border-primary-stroke-md",
       secondary: "border-secondary-stroke-md",
       tertiary: "border-tertiary-blue-xhigh",
       neutral: "border-neutral-stroke-high"
   }
}

// Token replacement in html file depending of selected args.
const Template = ({ variant = "light", format = "border-radius-xs", size, color = "primary"}) => {
    // Replace a placeholder in your HTML string with the label
    let component = variants[variant];
    component = component.replace(/\$\{size\}/g, size);
    component = component.replace(/\$\{color\}/g, colors[variant][color]);
    component = component.replace(/\$\{format\}/g, format);
    return component;
};

// Rendering of different variants of the component.
export const Dark = Template.bind({});
Dark.args = {
    variant: "dark",
    color: "primary",
    format: "rounded-full",
    size: "base",

};

export const Light = Template.bind({});
Light.args = {
    variant: "light",
    color: "primary",
    format: "rounded-full",
    size: "base",
};