import { Meta, StoryObj } from "@storybook/html";
// @ts-ignore
import breakpointsHtml from "./html/breakpoints.html";
// @ts-ignore
import containersHtml from "./html/containers.html";
// @ts-ignore
import gridHtml from "./html/grid.html";
// @ts-ignore
import layoutHtml from "./html/layout.html";


const meta: Meta = {
    title: "Identity/Layout & grid/Default",
};

export default meta;

type Story = StoryObj<HTMLDivElement>;

export const breakpoints: Story = () => {
    // Directly return the HTML templates
    return `${breakpointsHtml}`;
};
breakpoints.storyName = 'breakpoints';
breakpoints.parameters = { docs: { storyId: 'breakpoints' } };


export const containers: Story = () => {
    // Directly return the HTML templates
    return `${containersHtml}`;
};
containers.storyName = 'containers';
containers.parameters = { docs: { storyId: 'containers' } };

export const grid: Story = () => {
    // Directly return the HTML templates
    return `${gridHtml}`;
};
grid.storyName = 'grid';
grid.parameters = { docs: { storyId: 'grid' } };

export const layout: Story = () => {
    // Directly return the HTML templates
    return `${layoutHtml}`;
};
layout.storyName = 'layout';
layout.parameters = { docs: { storyId: 'layout' } };