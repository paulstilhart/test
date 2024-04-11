import { StoryObj, Meta } from '@storybook/html';
import {TemplateCardEditoAgency} from './templates/CardEditoAgencyTemplate';


let EditoAgency;
const meta: Meta<typeof EditoAgency> = {
    component: EditoAgency,
    title: 'Components/Cards/Edito agence',
    //Definition of the available args for the component
    argTypes: {
        title: { control: { type: "text"},},
        address: { control: { type: "text"},},
        link: { control: { type: "text"},},
    },
};

export default meta;
type Story = StoryObj<typeof EditoAgency>;

// Rendering of different variants of the component.
export const Default = TemplateCardEditoAgency.bind({});
Default.args = {
    title: 'Nom de l’agence dans cet espace',
    address : 'XX rue de lorem<br>73000 LOREM CEDEX',
    link: 'Link text'

}
