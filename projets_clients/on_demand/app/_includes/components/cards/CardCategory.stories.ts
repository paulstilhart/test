import { StoryObj, Meta } from '@storybook/html';
import {TemplateCardCategory} from './templates/CardCategoryTemplate';

let Category;
const meta: Meta<typeof Category> = {
    component: Category,
    title: 'Components/Cards/Category',
    //Definition of the available args for the component
    argTypes: {
        titre: {
            control: { type: "text"}
        },
        color: {
            control: { type: "select"},
            options: ['primary', 'tertiary'],
        },
        hideImage: {
            control: { type: "boolean"},
        }
    },
};

export default meta;
type Story = StoryObj<typeof Category>;

// Rendering of different variants of the component.
export const Default = TemplateCardCategory.bind({});
Default.args = {
    color: "primary",
    titre: "Titre categorie",
    hideImage: false,
};