import { Meta, StoryObj } from "@storybook/html";
// @ts-ignore
import BordersHtml from "./html/borders.html";



const meta: Meta = {
    title: "Identity/Shadows & Borders/Borders",
};

export default meta;

type Story = StoryObj<HTMLDivElement>;

export const borders: Story = () => {
    // Directly return the HTML templates
    return `${BordersHtml}`;
};
borders.storyName = 'Default';
borders.parameters = { docs: { storyId: 'borders' } };

