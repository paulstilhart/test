import { Meta, StoryObj } from "@storybook/html";
// @ts-ignore
import shadowsHtml from "./html/shadows.html";


const meta: Meta = {
    title: "Identity/Shadows & Borders/Shadows",
};

export default meta;

type Story = StoryObj<HTMLDivElement>;

export const shadows: Story = () => {
    // Directly return the HTML templates
    return `${shadowsHtml}`;
};
shadows.storyName = 'Default';
shadows.parameters = { docs: { storyId: 'shadows' } };

