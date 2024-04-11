import { StoryObj, Meta } from '@storybook/html';
import {TemplateCardArticle} from './templates/CardArticleTemplate';
let Article;
const meta: Meta<typeof Article> = {
    component: Article,
    title: 'Components/Cards/Article',
    //Definition of the available args for the component
    argTypes: {
        format: {
            control: { type: "select"},
            options: [
                "cadre",
                "sansCadre",
            ],
        },
        ships: { control: { type: "text"},},
        hideShips: { control : {type: "boolean"}},
        title: { control: { type: "text"},},
        text: { control: { type: "text"},},
        time: { control: { type: "number"},},
        hideTime: { control : {type: "boolean"}},
        link: { control: { type: "text"},},
        hideLink: { control : {type: "boolean"}},
        variant: {
            table: {
                disable: true
            }
        }
    },
};

export default meta;
type Story = StoryObj<typeof Article>;
// Rendering of different variants of the component.
export const Horizontal = TemplateCardArticle.bind({});
Horizontal.args = {
    format: 'cadre',
    variant : 'horizontal',
    hideShips: false,
    ships : "ships",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit do dolor sit amet",
    text : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida habitant ris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida habitant ris",
    time : 10,
    hideTime: false,
    link : "Text Link",
    hideLink: false
};

export const Vertical = TemplateCardArticle.bind({});
Vertical.args = {
    format: 'cadre',
    variant : 'vertical',
    ships : "ships",
    hideShips: false,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit do dolor sit amet",
    text : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida habitant ris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida habitant ris",
    time : 10,
    hideTime: false,
    link : "Text Link",
    hideLink: false
};
