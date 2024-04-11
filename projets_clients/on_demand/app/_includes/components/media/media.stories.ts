import { StoryObj, Meta } from '@storybook/html';
import Media from "./html/media-image.html";
import MediaVideo from "./html/media-video.html";


const meta: Meta<typeof Media> = {
    component: Media,
    title: 'Components/Media',
    //Definition of the available args for the component
    argTypes: {
        variant: {
            control: {type: "select"},
            options : [ "image", "video "],
            table: {
                disable : true
            }
        },
        forme: {
            control: {type: "select"},
            options : [
                "sans",
                "border-radius-xs",
                "border-leaf",
                "rounded-full"
            ]
        }
    },
};

const variants = {
    'image': Media,
    'video': MediaVideo,
}

export default meta;
type Story = StoryObj<typeof Media>;


// Token replacement in html file depending of selected args.
const Template = ({ variant = "image", forme="border-radius-xs" }) => {
    // Replace a placeholder in your HTML string with the label
    let component = variants[variant];
    component = component.replace(/\$\{forme\}/g, forme);
    // Replace a placeholder in your HTML string with the label
    return component;
};

// Rendering of different variants of the component.
export const Image = Template.bind({});
Image.args = {
    variant: 'image',
    forme : "border-radius-xs"
};

export const Video = Template.bind({});
Video.args = {
    variant: 'video',
    forme : "border-radius-xs"
};

