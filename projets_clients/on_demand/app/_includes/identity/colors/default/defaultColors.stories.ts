import { Meta, StoryObj } from "@storybook/html";
// @ts-ignore
import brandHtml from "./html/brand.html";
// @ts-ignore
import neutralHtml from "./html/neutral.html";
// @ts-ignore
import statusHtml from "./html/status.html";



const meta: Meta = {
    title: "Identity/Colors/Default",
};

export default meta;

type Story = StoryObj<HTMLDivElement>;

export const brand: Story = () => {
    // Directly return the HTML templates
    return `${brandHtml}`;
};
brand.storyName = 'Brand';
brand.parameters = { docs: { storyId: 'brand' } };


export const neutral: Story = () => {
    // Directly return the HTML templates
    return `${neutralHtml}`;
};
neutral.storyName = 'Neutral';
neutral.parameters = { docs: { storyId: 'neutral' } };


export const status: Story = () => {
    // Directly return the HTML templates
    return `${statusHtml}`;
};
status.storyName = 'Status';
status.parameters = { docs: { storyId: 'Status' } };