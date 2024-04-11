import { StoryObj, Meta } from '@storybook/html';
import ListGroup from "./html/list-group--1.html";
import ListGroupHTML2 from "./html/list-group--2.html";
import ListGroupHTML3 from "./html/list-group--3.html";



const meta: Meta<typeof ListGroup> = {
    component: ListGroup,
    title: 'Components/List Group',
    //Definition of the available args for the component
    argTypes: {
        variant : {
            control: { type: "select"},
            options:[
                "ListGroup",
                "ListGroup2",
                "ListGroup3"
            ],
            table: {
                disable: true,
            }
        },
        title : {
            control: { type: "text"}
        },
        description : {
            control: { type: "text"}
        },

    },
};

export default meta;
type Story = StoryObj<typeof ListGroup>;

const variants = {
    ListGroup: ListGroup,
    ListGroup2 : ListGroupHTML2,
    ListGroup3: ListGroupHTML3,
}


// Token replacement in html file depending of selected args.
const Template = ({
                    variant,
                    description,
                    title,

                  }) => {
    let component = variants[variant];
    component = component.replace(/\$\{title\}/g, title);
    component = component.replace(/\$\{description\}/g, description);

    return component;
};


// Rendering of different variants of the component.
export const ListGroup1 = Template.bind({});
ListGroup1.argTypes = {
    description: {
        table: {
            disable: true,
        }
    },
};

ListGroup1.args = {
    variant: "ListGroup",
    title: "Title en body L bold",
};

export const ListGroup2 = Template.bind({});

ListGroup2.argTypes = {
    description: {
        table: {
            disable: true,
        }
    },
};
ListGroup2.args = {
    variant: "ListGroup2",
    title: "Title en body L bold",
    description: "Description"
};

export const ListGroup3 = Template.bind({});
ListGroup3.args = {
    variant: "ListGroup3",
    title: "Title en body L bold",
    description: "Description"
};