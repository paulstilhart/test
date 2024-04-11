import { StoryObj, Meta } from '@storybook/html';
import {TemplateCardTestimonial} from "./templates/CardTestimonialTemplate";

let Testimonial;
const meta: Meta<typeof Testimonial> = {
    component: Testimonial,
    title: 'Components/Cards/Testimonial',
    //Definition of the available args for the component
    argTypes: {
        variant: {
            table: {
                disable: true
            }
        },
        titre: {
            control: {type: "text"}
        },
        label1: {
            control: {type: "text"}
        },
        label2: {
            control: {type: "text"}
        },
        description: {
            control: {type: "text"}
        },
    },
};

export default meta;
type Story = StoryObj<typeof Testimonial>;


// Rendering of different variants of the component.
export const Vertical = TemplateCardTestimonial.bind({});
Vertical.args = {
    variant : 'vertical',
    titre: "Lorem ipsum",
    label1: "Label 1",
    label2: "Label 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida habitant risus cursus neque scelerisque tempor, pretium Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida habitant risus cursus neque scelerisque tempor, pretium"

};
export const Horizontal = TemplateCardTestimonial.bind({});
Horizontal.args = {
    variant : 'horizontal',
    titre: "Lorem ipsum",
    label1: "Label 1",
    label2: "Label 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida habitant risus cursus neque scelerisque tempor, pretium Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida habitant risus cursus neque scelerisque tempor, pretium"

};